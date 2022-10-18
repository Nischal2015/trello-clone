import { nanoid } from 'nanoid';
import { AppState } from './appStateReducer.d';
import { Action } from '../actions';
import { findItemIndexById, moveItem } from '../../utils';

const appStateReducer = (draft: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }

    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }

    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists.splice(0, draft.lists.length, ...moveItem(draft.lists, dragIndex, hoverIndex));
      break;
    }

    case 'SET_DRAGGED_ITEM': {
      // eslint-disable-next-line no-param-reassign
      draft.draggedItem = action.payload;
      break;
    }

    case 'MOVE_TASK': {
      const { draggedItemId, hoverItemId, sourceColumnId, targetColumnId } = action.payload;
      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(draft.lists, targetColumnId);
      const dragIndex = findItemIndexById(draft.lists[sourceListIndex].tasks, draggedItemId);
      const hoverIndex = hoverItemId ? findItemIndexById(draft.lists, hoverItemId) : 0;

      const item = draft.lists[sourceListIndex].tasks[dragIndex];

      // Remove the task from source list
      draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);

      // Add the task to target list
      draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
      break;
    }

    default: {
      throw new Error();
    }
  }
};

export default appStateReducer;

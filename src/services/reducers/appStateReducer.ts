import { nanoid } from 'nanoid';
import { AppState } from './appStateReducer.d';
import { Action } from '../actions';
import { findItemIndexById } from '../../utils';

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

    default: {
      //
    }
  }
};

export default appStateReducer;

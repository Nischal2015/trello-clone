import { DragItem } from '../../types';

export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { text: string; listId: string };
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | null;
    }
  | {
      type: 'MOVE_TASK';
      payload: {
        draggedItemId: string;
        hoverItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    };

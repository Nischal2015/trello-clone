import { Action } from '../../services';
import { Dispatch } from 'react';
import { DragItem } from '../../types';

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export interface AppStateContextProps extends AppState {
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
}

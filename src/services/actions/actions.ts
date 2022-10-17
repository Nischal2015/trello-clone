/* eslint-disable import/prefer-default-export */
import { Action } from './actions.d';

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: 'ADD_LIST',
  payload: text,
});

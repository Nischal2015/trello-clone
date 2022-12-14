import { createContext, ReactNode } from 'react';
import { useImmerReducer } from 'use-immer';
import { AppStateContextProps, AppState } from './AppStateContext.d';
import { appStateReducer } from '../../services';

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;

  const getTasksByListId = (id: string) => lists.find((list) => list.id === id)?.tasks || [];

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;

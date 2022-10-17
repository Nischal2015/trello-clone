import { createContext, ReactNode } from 'react';
import { AppStateContextProps, AppState } from './AppStateContext.d';

const appData: AppState = {
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
  const { lists } = appData;

  const getTasksByListId = (id: string) => lists.find((list) => list.id === id)?.tasks || [];

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AppStateContext.Provider value={{ lists, getTasksByListId }}>{children}</AppStateContext.Provider>;
}

export default AppStateProvider;

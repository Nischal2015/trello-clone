import { useContext } from 'react';
import { AppStateContext } from '../context';

function useAppState() {
  return useContext(AppStateContext);
}

export default useAppState;

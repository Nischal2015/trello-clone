import './App.css';
import { AddNewItem, Column, CustomDragLayer } from './components';
import { useAppState } from './hooks';
import { AppContainer } from './Styles';
import { addList } from './services';

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+Add another list" onAdd={(text) => dispatch(addList(text))} />
    </AppContainer>
  );
}

export default App;

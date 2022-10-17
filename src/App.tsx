import './App.css';
import { AddNewItem, Column } from './components';
import { useAppState } from './hooks';
import { AppContainer } from './Styles';

function App() {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;

import './App.css';
import { AddNewItem, Column } from './components';
import { AppContainer } from './Styles';

function App() {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;

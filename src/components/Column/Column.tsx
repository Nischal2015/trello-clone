import { useAppState } from '../../hooks';
import { ColumnContainer, ColumnTitle } from '../../Styles';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { ColumnProps } from './Column.d';

function Column({ text, id }: ColumnProps) {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another card" onAdd={console.log} dark />
    </ColumnContainer>
  );
}

export default Column;

import { ColumnContainer, ColumnTitle } from '../../Styles';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { ColumnProps } from './Column.d';

function Column({ text }: ColumnProps) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
      <AddNewItem toggleButtonText="+ Add another card" onAdd={console.log} dark />
    </ColumnContainer>
  );
}

export default Column;

import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';
import { useAppState, useItemDrag } from '../../hooks';
import { ColumnContainer, ColumnTitle } from '../../Styles';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { ColumnProps } from './Column.d';
import { addTask, moveList, moveTask, setDraggedItem } from '../../services';
import { isHidden } from '../../utils';

function Column({ text, id, isPreview }: ColumnProps) {
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const tasks = getTasksByListId(id);
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.id === id) return;
        if (tasks.length) return;

        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    }),
  });

  const { drag } = useItemDrag({ id, text, type: 'COLUMN' });
  drag(drop(ref));

  return (
    <ColumnContainer ref={ref} isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)} isPreview={isPreview}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card columnId={id} text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another card" onAdd={(itemText) => dispatch(addTask(itemText, id))} dark />
    </ColumnContainer>
  );
}

export default Column;

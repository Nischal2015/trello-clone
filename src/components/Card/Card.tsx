import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';
import { isHidden } from '../../utils';
import { useAppState, useItemDrag } from '../../hooks';
import { CardContainer } from '../../Styles';
import { CardProps } from './Card.d';
import { moveTask, setDraggedItem } from '../../services';

function Card({ text, id, columnId, isPreview }: CardProps) {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: 'CARD',
    id,
    text,
    columnId,
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: throttle(200, () => {
      if (!draggedItem) return;

      if (draggedItem.type !== 'CARD') return;

      if (draggedItem.id === id) return;

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer isHidden={isHidden(draggedItem, 'CARD', id, isPreview)} isPreview={isPreview} ref={ref}>
      {text}
    </CardContainer>
  );
}

export default Card;

import { useDragLayer } from 'react-dnd';
import { Column } from '../Column';
import { useAppState } from '../../hooks';
import { CustomDragLayerContainer, DragPreviewWrapper } from '../../Styles';
import { Card } from '../Card';

function CustomDragLayer() {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === 'COLUMN' ? (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        ) : (
          <Card columnId={draggedItem.columnId} id={draggedItem.id} text={draggedItem.text} isPreview />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
}

export default CustomDragLayer;

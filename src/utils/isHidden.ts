import { DragItem } from '../types';

const isHidden = (draggedItem: DragItem | null, itemType: string, id: string, isPreview?: boolean): boolean =>
  Boolean(!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id);

export default isHidden;

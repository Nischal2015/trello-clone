import { useState } from 'react';
import { AddItemButton } from '../../Styles';
import { NewItemForm } from '../NewItemForm';
import { AddNewItemProps } from './AddNewItem.d';

function AddNewItem(props: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;

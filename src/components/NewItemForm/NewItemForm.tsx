import React, { useState } from 'react';
import { useFocus } from '../../hooks';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../../Styles';
import { NewItemFormProps } from './NewItemForm.d';

function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') onAdd(text);
  };
  return (
    <NewItemFormContainer>
      {/* onKeypress is deprecated */}
      <NewItemInput ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleAddText} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;

/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>(
  {
    backgroundColor: '#ffffff3d',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    maxWidth: '30rem',
    padding: '1.2rem 1.6rem',
    textAlign: 'left',
    transition: 'background 85ms ease-in',
    width: '100%',
    '&:hover': {
      backgroundColor: '#ffffff52',
    },
  },

  (props) => ({
    color: props.dark ? '#000' : '#fff',
  }),
);

export const AppContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#3179ba',
  height: '100%',
  width: '100%',
  padding: '2rem',
});

export const CardContainer = styled.div({
  backgroundColor: '#fff',
  cursor: 'pointer',
  marginBottom: '0.8rem',
  padding: '0.8rem 1.6rem',
  maxWidth: '30rem',
  borderRadius: '4px',
  boxShadow: '0 1px 0 0 #091e4240',
});

export const ColumnContainer = styled.div({
  backgroundColor: '#ebecf0',
  width: '30rem',
  minHeight: '4rem',
  marginRight: '1.6rem',
  borderRadius: '4px',
  padding: '8px',
  flexGrow: '0',
});

export const ColumnTitle = styled.div({
  padding: '.6rem 1.6rem 1.2rem',
  fontWeight: '600',
});

export const NewItemButton = styled.div({
  backgroundColor: '#5aac44',
  borderRadius: '4px',
  border: 'none',
  color: '#fff',
  padding: '.6rem 1.2rem',
  textAlign: 'center',
});

export const NewItemFormContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '30rem',
  gap: '0.8rem',
});

export const NewItemInput = styled.input({
  borderRadius: '3px',
  border: 'none',
  boxShadow: '0 1px 0 0 #091e4240',
  width: '100%',
  padding: '.8rem 1.6rem',
  '&:focus': {
    boxShadow: 'inset 0 0 0 0.5px #fff, inset 0 0 0 2.5px #555',
    outline: 'none',
  },
});

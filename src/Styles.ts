/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

type AddItemButtonProps = {
  dark?: boolean;
};

type DragPreviewContainerProps = {
  isHidden?: boolean;
  isPreview?: boolean;
};

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
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

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>((props) => ({
  transition: 'transform 0.15s ease-in',
  opacity: props.isHidden ? 0 : 1,
  transform: props.isPreview ? 'rotate(5deg)' : 'none',
}));

export const CardContainer = styled(DragPreviewContainer)({
  backgroundColor: '#fff',
  cursor: 'pointer',
  marginBottom: '0.8rem',
  padding: '0.8rem 1.6rem',
  maxWidth: '30rem',
  borderRadius: '4px',
  boxShadow: '0 1px 0 0 #091e4240',
  lineHeight: '1.4',
});

export const ColumnContainer = styled(DragPreviewContainer)({
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

export const CustomDragLayerContainer = styled.div({
  position: 'fixed',
  left: '0',
  top: '0',
  pointerEvents: 'none',
  height: '100%',
  width: '100%',
  zIndex: '100',
});

export const DragPreviewWrapper = styled.div<DragPreviewWrapperProps>((props) => ({
  transform: `translate(${props.position.x}px, ${props.position.y}px)`,
}));

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

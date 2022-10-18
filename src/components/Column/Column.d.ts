import React from 'react';

export type ColumnProps = React.PropsWithChildren<{
  text: string;
  id: string;
  isPreview?: boolean;
}>;

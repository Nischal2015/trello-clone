type Item = {
  id: string;
};

const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => items.findIndex((item) => item.id === id);

// slice method is used to achieve purity
const removeItemAtIndex = <TItem>(array: TItem[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index),
];

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export default findItemIndexById;

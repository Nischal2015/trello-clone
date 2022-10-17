type Item = {
  id: string;
};

const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => items.findIndex((item) => item.id === id);

export default findItemIndexById;

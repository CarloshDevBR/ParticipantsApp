type RemovesTheItemFromTheListProps<T> = {
  id: string | number;
  list: T[];
};

export const RemovesTheItemFromTheList = <T extends { id: string | number }>({ id, list }: RemovesTheItemFromTheListProps<T>) => {
  const newList = list.filter((e) => e.id !== id);

  return newList;
};

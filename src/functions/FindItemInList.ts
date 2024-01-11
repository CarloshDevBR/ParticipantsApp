type FindItemInListProps<T> = {
  data: T[];
  callBack: (data: T) => void;
};

export const FindItemInList = <T>({ data, callBack }: FindItemInListProps<T>) => {
  const foundItem = data.find(callBack);

  return foundItem;
};

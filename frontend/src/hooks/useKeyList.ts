import { useState } from "react";

export const useKeyList = () => {
  const [keyList, setKeyList] = useState(initialData);
  const [selectedKeyId, setSelectedKeyId] = useState<number | undefined>(1);

  const selectedKey = keyList.find((key) => key.id === selectedKeyId);

  const addKey = (a: number, b: number) => {
    setKeyList([...keyList, { a, b, id: Math.floor(Math.random() * 10000) }]);
  };
  const removeKey = (id: number) => {
    if (keyList.length === 1) return;
    // if (id === selectedKey) setSelectedKey(keyList[0].id);
    setKeyList(keyList.filter((key) => key.id !== id));
  };

  const changeKey = (a: number, b: number, id: number) => {
    keyList.find((key) => key.id === id);
    setKeyList([...keyList]);
  };

  return {
    keyList,
    selectedKey,
    selectKey: setSelectedKeyId,
    addKey,
    removeKey,
    changeKey,
  };
};

const initialData = [
  { a: 3, b: 4, id: 1 },
  // { a: 23, b: 13, id: 4 },
  // { a: 1, b: 9, id: 5 },
  // { a: 14, b: 9, id: 6 },
  // { a: 1, b: 17, id: 7 },
];

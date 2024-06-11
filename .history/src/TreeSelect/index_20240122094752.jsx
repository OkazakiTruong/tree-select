import React, { useEffect, useState } from "react";
import { TreeSelect } from "./TreeSelect";

export const TreeSelectContainer = () => {
  const selectArr = const data = [
    {
      title: "tieu de 0",
      id: 0,
      parentId: null,
    },
    {
      title: "tieu de 1",
      id: 1,
      parentId: null,
    },
    {
      title: "tieu de 1.0",
      id: 2,
      parentId: 1,
    },
    {
      title: "tieu de 1.1",
      id: 3,
      parentId: 1,
    },
    {
      title: "tieu de 1.2",
      id: 4,
      parentId: 1,
    },
    {
      title: "tieu de 1.2.0",
      id: 7,
      parentId: 4,
    },
    {
      title: "tieu de 1.2.1",
      id: 8,
      parentId: 4,
    },
    {
      title: "tieu de 1.2.2",
      id: 9,
      parentId: 4,
    },
    {
      title: "tieu de 0.1",
      id: 5,
      parentId: 0,
    },
    {
      title: "tieu de 0.2",
      id: 6,
      parentId: 0,
    },
  ]
  const [select, setSelect] = useState(selectArr);
  useEffect(() => {});
  return (
    <div>
      <TreeSelect selectArr={select} />
    </div>
  );
};

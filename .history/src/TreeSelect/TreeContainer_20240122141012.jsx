import React, { useEffect, useState } from "react";
import { Tree } from "./Tree";
import "./style.css";

export const TreeContainer = () => {
  let data = [
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
  ];
  data = data.map((item) => {
    item["checked"] = false;
    return item;
  });
  const listParent = data.filter((item) => item.parentId !== null);
  const listParentId = [...new Set(listParent.map((item) => item.parentId))];
  const [treeData, setTreeData] = useState(data);
  useEffect(() => {
    console.log(treeData);
  });
  const handleChangeTree = (arr) => {
    setTreeData(arr);
  };

  return (
    <div className="tree-container">
      <Tree
        treeData={treeData}
        parentId={null}
        listParentId={listParentId}
        handleChangeTree={handleChangeTree}
      />
    </div>
  );
};

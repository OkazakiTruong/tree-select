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
      title: "tieu de 1.2.2",
      id: 10,
      parentId: 9,
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
  const listParent = data.filter((item) => item.parentId !== null);
  let listParentId = [...new Set(listParent.map((item) => item.parentId))];
  data = data.map((item) => {
    item["checked"] = false;
    item["titleActive"] = false;
    if (listParentId.includes(item.id)) {
      item["pending"] = false;
    }
    return item;
  });
  const [treeData, setTreeData] = useState(data);

  const handleChangeTree = (arr) => {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < listParentId.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[listParentId[i]].checked) {
          if (arr[j].parentId === listParentId[i]) {
            arr[j].checked = true;
            console.log(arr);
          }
        }
      }
    }
    // listParentId = listParentId.reverse();
    // for (let i = 0; i < listParentId.length; i++) {
    //   let checkAll = true;
    //   let isPending = false;
    //   let indexParent = arr.findIndex((value) => {
    //     return value.id === listParentId[i];
    //   });
    //   for (let j = 0; j < arr.length; j++) {
    //     if (arr[j].parentId === listParentId[i]) {
    //       if (!arr[j].checked) {
    //         checkAll = false;
    //       } else {
    //         isPending = true;
    //       }
    //       if (arr[j]?.pending) {
    //         isPending = true;
    //       }
    //     }
    //   }
    //   if (checkAll) {
    //     arr[indexParent].checked = true;
    //   } else {
    //     arr[indexParent].checked = false;
    //     arr[indexParent].pending = isPending;
    //   }
    // }
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

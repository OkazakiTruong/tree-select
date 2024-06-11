import React, { useRef, useState } from "react";
import { Tree } from "./Tree";

export default function TreeNode({
  node,
  treeData,
  listParentId,
  handleChangeTree,
  handleSetAgain,
}) {
  const [showChildren, setShowChildren] = useState(false);

  const handleOpen = () => {
    setShowChildren(!showChildren);
  };
  const handleCheck = (e) => {
    listParentId = listParentId.sort((a, b) => a - b);
    console.log(listParentId);
    let newArr = treeData.map((item) => {
      if (item.id === node.id) {
        item.checked = e.target.checked;
      }
      return item;
    });

    if (listParentId.includes(node.id)) {
      let start = listParentId.findIndex((value) => {
        return value === node.id;
      });
      console.log(start);
      for (let i = start; i < listParentId.length; i++) {
        let indexParent = newArr.findIndex((value) => {
          return value.id === listParentId[i];
        });
        for (let j = 0; j < newArr.length; j++) {
          if (newArr[indexParent].checked) {
            if (newArr[j].parentId === listParentId[i]) {
              newArr[j].checked = true;
            }
          } else {
            if (newArr[j].parentId === listParentId[i]) {
              newArr[j].checked = false;
            }
          }
        }
      }
    }
    handleChangeTree(newArr);
  };
  const handleTitleActive = () => {
    let newArr = treeData.map((item) => {
      item.titleActive = false;
      if (item.id === node.id) {
        item.titleActive = !titleActive;
      }
      return item;
    });
  };
  return (
    <div>
      <div className="tree-item">
        {listParentId.includes(node.id) && (
          <span className="icon-wrapper" onClick={handleOpen}>
            <i
              className={`icon fa-solid fa-caret-right  ${
                showChildren ? "active" : ""
              }`}
            ></i>
          </span>
        )}
        <label htmlFor={"checkbox" + node.id} className="checkbox-custom">
          {node.checked ? (
            <div className="icon-checked">
              <i className="fa-solid fa-check"></i>
            </div>
          ) : node?.pending ? (
            <div className="icon-pending"></div>
          ) : (
            ""
          )}
        </label>
        <input
          type="checkbox"
          id={"checkbox" + node.id}
          onChange={handleCheck}
          checked={node.checked}
        />
        <span className="checkbox-title" onClick={handleTitleActive}>
          {node.title}
        </span>
      </div>
      <div className={`ml-20 children ${showChildren && "show"}`}>
        {
          <Tree
            treeData={treeData}
            parentId={node.id}
            listParentId={listParentId}
            handleChangeTree={handleChangeTree}
            handleSetAgain={handleSetAgain}
          />
        }
      </div>
    </div>
  );
}

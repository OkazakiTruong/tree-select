import React, { useRef, useState } from "react";
import { Tree } from "./Tree";

export default function TreeNode({
  node,
  treeData,
  listParentId,
  handleChangeTree,
}) {
  const [showChildren, setShowChildren] = useState(false);
  const handleOpen = () => {
    setShowChildren(!showChildren);
  };

  const handleCheck = (e) => {
    let isCheckAll = false;
    const newParentIds = [];
    let newArr = treeData.map((item) => {
      if (item.id === node.id) {
        item.checked = e.target.checked;
      }
      if (item.parentId === node.id) {
        item.checked = e.target.checked;
        newParentIds.push(item.id);
      }
      return item;
    });
    newParentIds.map((id) => {
      return newArr.map((item) => {
        if (item.parentId === id) {
          item.checked = e.target.checked;
        }
        return item;
      });
    });
    treeData.map((item) => {
      if (item.parentId === node.parentId) {
        isCheckAll = true;
        if (!item.checked) {
          isCheckAll = false;
        }
      }
    });
    if (isCheckAll) {
      newArr = newArr.map((item) => {
        if (item.id === node.parentId) {
          item.checked = true;
        }
        return item;
      });
    } else {
      newArr = newArr.map((item) => {
        if (item.id === node.parentId) {
          item.checked = false;
        }
        return item;
      });
    }
    handleChangeTree(newArr);
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
        <span>{node.title}</span>
      </div>
      <div className="ml-20">
        {showChildren && (
          <Tree
            treeData={treeData}
            parentId={node.id}
            listParentId={listParentId}
            handleChangeTree={handleChangeTree}
          />
        )}
      </div>
    </div>
  );
}

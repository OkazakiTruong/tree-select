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
    const newArr = [];
    listParentId = listParentId.sort((a, b) => a - b);
    for (let i = 0; i < listParentId.length; i++) {
      for (let j = 0; j < treeData; j++) {
        if (treeData[j].id === node.id) {
          treeData[j].checked = e.target.checked;
        }
        newArr.push(treeData[j]);
      }
    }
    handleChangeTree(newArr);
  };
  const handleTitleActive = () => {
    console.log("active");
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
          />
        }
      </div>
    </div>
  );
}

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
    console.log("change");
    const newArr = treeData.map((item) => {
      if (item.id === node.id) {
        item.checked = e.target.checked;
      }
      if (item.parentId === node.id) {
        item.checked = e.target.checked;
      }
      return item;
    });
    console.log(newArr);
    handleChangeTree(newArr);
  };
  const checkboxRef = useRef(null);
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
          {checkboxRef.current.checked ? <i class="fa-solid fa-check"></i> : ""}
        </label>
        <input
          type="checkbox"
          id={"checkbox" + node.id}
          //   checkboxRef={checkboxRef}
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

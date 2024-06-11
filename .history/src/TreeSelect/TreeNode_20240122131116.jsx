import React, { useState } from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData, listParentId }) {
  const [showChildren, setShowChildren] = useState(false);
  const handleOpen = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div>
      <div className="tree-item" onClick={handleOpen}>
        {listParentId.includes(node.id) && (
          <span className="icon-wrapper">
            <i
              className={`icon fa-solid fa-caret-right  ${
                showChildren ? "active" : ""
              }`}
            ></i>
          </span>
        )}
        <input type="checkbox" />
        <label htmlFor="">{node.title}</label>
      </div>
      <div className="ml-20">
        {showChildren && (
          <Tree
            treeData={treeData}
            parentId={node.id}
            listParentId={listParentId}
          />
        )}
      </div>
    </div>
  );
}

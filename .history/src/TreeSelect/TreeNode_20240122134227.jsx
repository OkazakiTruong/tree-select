import React, { useRef, useState } from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData, listParentId }) {
  const [showChildren, setShowChildren] = useState(false);
  const handleOpen = () => {
    setShowChildren(!showChildren);
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
        {/* <label htmlFor={"checkbox" + node.id} className="checkbox-custom">
          {checkboxRef.current.value ? <i class="fa-solid fa-check"></i> : ""}
        </label> */}
        <input
          type="checkbox"
          id={"checkbox" + node.id}
          checkboxRef={checkboxRef}
          onChange={(e) => {
            setIsParentCheck(e.target.value);
          }}
          value={isParentCheck}
        />
        <span>{node.title}</span>
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

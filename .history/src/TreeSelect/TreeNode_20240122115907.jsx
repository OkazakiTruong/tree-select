import React, { useState } from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData, listParentId }) {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      {listParentId.includes(node.id) && (
        <div>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      )}
      <input type="checkbox" />
      <label htmlFor="">{node.title}</label>
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

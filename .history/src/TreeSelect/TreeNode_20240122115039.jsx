import React from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData, listParentId }) {
  return (
    <div>
      {listParentId.includes(node.id) && <i class="fa-solid fa-caret-down"></i>}
      <input type="checkbox" />
      <label htmlFor="">{node.title}</label>
      <div className="ml-20">
        <Tree
          treeData={treeData}
          parentId={node.id}
          listParentId={listParentId}
        />
      </div>
    </div>
  );
}

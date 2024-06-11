import React from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData }) {
  return (
    <div>
      <input type="checkbox" />
      <label htmlFor="">{node.title}</label>
      <div>
        <Tree treeData={treeData} parentId={node.id} />
      </div>
    </div>
  );
}

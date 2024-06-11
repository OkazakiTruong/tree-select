import React from "react";
import { Tree } from "./Tree";

export default function TreeNode({ node, treeData }) {
  return (
    <div className={"children-" + node.id}>
      <input type="checkbox" />
      <label htmlFor="">{node.title}</label>
      <Tree treeData={treeData} parentId={node.id} />
    </div>
  );
}

import React, { useEffect } from "react";
import { TreeNode } from "./TreeNode";

export const Tree = ({ treeData, parentId }) => {
  useEffect(() => {}, []);
  return (
    <div>
      {treeData.map((node) => {
        {
          node.id === parentId && <TreeNode />;
        }
      })}
    </div>
  );
};

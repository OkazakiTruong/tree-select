import React, { useEffect } from "react";
import TreeNode from "./TreeNode";

export const Tree = ({ treeData, parentId }) => {
  useEffect(() => {
    console.log(treeData);
  }, []);
  return (
    <div>
      {treeData.map((node) => {
        {
          <TreeNode />;
        }
      })}
    </div>
  );
};

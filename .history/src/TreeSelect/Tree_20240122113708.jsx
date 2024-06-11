import React, { useEffect } from "react";
import TreeNode from "./TreeNode";

export const Tree = ({ treeData, parentId }) => {
  useEffect(() => {
    console.log(treeData);
  }, []);
  return (
    <div>
      {treeData.map((node) => {
        return (
          node.parentId === parentId && (
            <>
              <i class="fa-solid fa-caret-down"></i>
              <TreeNode node={node} treeData={treeData} />
            </>
          )
        );
      })}
    </div>
  );
};

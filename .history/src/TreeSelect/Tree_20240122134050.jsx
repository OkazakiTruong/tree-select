import React, { useEffect } from "react";
import TreeNode from "./TreeNode";

export const Tree = ({
  treeData,
  parentId,
  listParentId,
  isParentCheck = false,
}) => {
  useEffect(() => {
    console.log(treeData);
  }, []);
  return (
    <div>
      {treeData.map((node) => {
        return (
          node.parentId === parentId && (
            <TreeNode
              node={node}
              treeData={treeData}
              listParentId={listParentId}
              key={node.id}
              isParentCheck={isParentCheck}
            />
          )
        );
      })}
    </div>
  );
};

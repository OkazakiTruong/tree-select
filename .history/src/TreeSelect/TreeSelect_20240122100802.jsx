import React, { useEffect, useState } from "react";

export const TreeSelect = ({ selectArr }) => {
  const [parents, setParents] = useState();
  const [childrens, setChildren] = useState();
  useEffect(() => {
    const childrenArr = selectArr.filter((item) => item.parentId !== null);
    console.log(childrenArr);
  });
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div className="" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label for={item.id}>{item.title}</label>
          </div>
        );
      })}
    </>
  );
};

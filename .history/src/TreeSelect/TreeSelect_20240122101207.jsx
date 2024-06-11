import React, { useEffect, useState } from "react";
const index = 0;
export const TreeSelect = ({ selectArr }) => {
  const [previousArr, setPreviousArr] = useState([]);
  const [renderArr, setRenderArr] = useState([]);

  useEffect(() => {
    if (index === 0) {
      const arr = selectArr.filter((item) => item.parentId !== null);
    }
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

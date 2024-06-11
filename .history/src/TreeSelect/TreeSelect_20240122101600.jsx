import React, { useEffect, useState } from "react";
const index = 0;
export const TreeSelect = ({ selectArr }) => {
  const [previousArr, setPreviousArr] = useState([]);
  const [renderArr, setRenderArr] = useState([]);
  useEffect(() => {
    let arr;
    if (index === 0) {
      arr = selectArr.filter((item) => item.parentId === null);
    } else {
      arr = previousArr.map((prevItem) => {
        return selectArr.filter((item) => prevItem.id === item.parentId);
      });
    }
    console.log(arr);
    setPreviousArr(arr);
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

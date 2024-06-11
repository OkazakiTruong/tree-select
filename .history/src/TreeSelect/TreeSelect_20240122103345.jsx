import React, { useEffect, useState } from "react";
const index = 0;
export const TreeSelect = ({ selectArr }) => {
  const [previousArr, setPreviousArr] = useState([]);
  const [renderArr, setRenderArr] = useState([]);
  useEffect(() => {
    let html = "";
    selectArr.foreach((item) => {
      if (item.parentId === null) {
        html += `<div className="" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>`;
      }
    });
  }, []);
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div className="" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        );
      })}
    </>
  );
};

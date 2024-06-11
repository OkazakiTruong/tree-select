import React, { useEffect, useState } from "react";
const index = 0;
export const TreeSelect = ({ selectArr }) => {
  const [previousArr, setPreviousArr] = useState([]);
  const [renderArr, setRenderArr] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div className="" key={item.id}>
            <FontAwesomeIcon icon={faCaretDown} />
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        );
      })}
    </>
  );
};

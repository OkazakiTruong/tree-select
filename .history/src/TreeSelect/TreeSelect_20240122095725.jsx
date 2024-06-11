import React, { useEffect } from "react";

export const TreeSelect = ({ selectArr }) => {
  useEffect(() => {
    console.log(selectArr);
  });
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label for={item.id}>{item.title}</label>
          </div>
        );
      })}
    </>
  );
};

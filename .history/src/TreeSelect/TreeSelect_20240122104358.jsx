import React, { useEffect, useState } from "react";

export const TreeSelect = ({ selectArr }) => {
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

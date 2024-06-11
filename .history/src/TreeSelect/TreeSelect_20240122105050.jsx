import React, { useEffect, useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const TreeSelect = ({ selectArr }) => {
  useEffect(() => {}, []);
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div className="" key={item.id}>
            item.parentId && <i className="fa-solid fa-caret-down"></i>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        );
      })}
    </>
  );
};

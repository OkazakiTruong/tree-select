import React, { useEffect, useState } from "react";
const index = 0;
export const TreeSelect = ({ selectArr }) => {
  const [previousArr, setPreviousArr] = useState([]);
  const [renderHTML, setRenderHTML] = useState("");
  useEffect(() => {
    let html = "";
    Array.from(selectArr).foreach((item) => {
      if (item.parentId === null) {
        html += `<div className="" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.title} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>`;
      }
    });
    setRenderHTML(renderHTML);
  }, []);
  return <>{renderHTML}</>;
};

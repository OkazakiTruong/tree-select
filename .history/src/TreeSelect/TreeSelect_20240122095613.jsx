import React, { useEffect } from "react";

export const TreeSelect = ({ selectArr }) => {
  useEffect(() => {
    console.log(selectArr);
  });
  return (
    <>
      {selectArr.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              value={item.title}
              key={item.id}
            />
          </div>
        );
      })}
    </>
  );
};

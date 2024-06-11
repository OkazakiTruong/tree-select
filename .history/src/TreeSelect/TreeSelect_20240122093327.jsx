import React from "react";

export const TreeSelect = ({ selectArr }) => {
  return (
    <>
      {selectArr.map((item) => {
        return <div className="item">{item}</div>;
      })}
    </>
  );
};

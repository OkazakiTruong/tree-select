import React, { useState } from "react";
import { TreeSelect } from "./TreeSelect";

export const TreeSelectContainer = () => {
  const [select, setSelect] = useState("");
  return (
    <div>
      <TreeSelect />
    </div>
  );
};

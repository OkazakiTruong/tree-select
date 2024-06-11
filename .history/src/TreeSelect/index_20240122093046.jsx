import React, { useEffect, useState } from "react";
import { TreeSelect } from "./TreeSelect";

export const TreeSelectContainer = () => {
  const selectArr = [
    {
      title: "0-0",
      key: "0-0",
      children: [
        {
          title: "0-0-0",
          key: "0-0-0",
          children: [
            {
              title: "0-0-0-0",
              key: "0-0-0-0",
            },
            {
              title: "0-0-0-1",
              key: "0-0-0-1",
            },
            {
              title: "0-0-0-2",
              key: "0-0-0-2",
            },
          ],
        },
        {
          title: "0-0-1",
          key: "0-0-1",
          children: [
            {
              title: "0-0-1-0",
              key: "0-0-1-0",
            },
            {
              title: "0-0-1-1",
              key: "0-0-1-1",
            },
            {
              title: "0-0-1-2",
              key: "0-0-1-2",
            },
          ],
        },
        {
          title: "0-0-2",
          key: "0-0-2",
        },
      ],
    },
    {
      title: "0-1",
      key: "0-1",
      children: [
        {
          title: "0-1-0-0",
          key: "0-1-0-0",
        },
        {
          title: "0-1-0-1",
          key: "0-1-0-1",
        },
        {
          title: "0-1-0-2",
          key: "0-1-0-2",
        },
      ],
    },
    {
      title: "0-2",
      key: "0-2",
    },
  ];
  useEffect(() => {
    console.log(selectArr);
  });
  const [select, setSelect] = useState("");
  return (
    <div>
      <TreeSelect />
    </div>
  );
};

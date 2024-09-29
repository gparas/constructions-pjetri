import React from "react";

interface Props {
  items: React.ReactNode[];
}

const ShowcaseGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-1 md:grid-cols-4 gap-4">
      <div className="row-span-2 md:col-span-2">{items[0]}</div>
      <div className="row-span-1 md:col-span-2 grid grid-cols-2 gap-4">
        {items[1]}
        {items[2]}
      </div>
      <div className="row-span-1 md:col-span-2">{items[3]}</div>
    </div>
  );
};

export default ShowcaseGrid;

import React from "react";

interface ITableHeader {
  headerTitles : string[]
}

const TableHeader = (props : ITableHeader) => {
  return (
    <thead className="rounded-t-lg border-2">
      <tr>
        {props.headerTitles.map((title, index) => <th key={index} className="px-4 py-2">{title}</th>)}
      </tr>
    </thead>
  )
}

export default TableHeader
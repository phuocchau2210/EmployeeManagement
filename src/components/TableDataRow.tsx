import React from "react";
import cx from "classnames";

interface ITableDataRow {
  rowItems: IRowItem[];
}

interface IRowItem {
  className?: string;
  component: any;
}
const TableDataRow = (props: ITableDataRow) => {
  return (
    <tr>
      {props.rowItems.map((rowItem, index) => (
        <th key={index} className={cx("px-4 py-2", rowItem.className)}>{rowItem.component}</th>
      ))}
    </tr>
  );
};

export default TableDataRow;

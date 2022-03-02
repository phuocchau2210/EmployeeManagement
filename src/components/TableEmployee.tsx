import * as React from "react";
import { useSelector } from "react-redux";
import { AppState, IEmployee } from "../store/interfaces";

export interface ITableEmployeeProps {
  employees: IEmployee[];
}

const TableEmployee = (props: ITableEmployeeProps) => {
  const employees: readonly IEmployee[] = useSelector(
    (state: AppState) => state.employees
  );

  console.log(employees);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr>
            <td className="px-4 py-2">{employee.id}</td>
            <td className="px-4 py-2">{employee.name}</td>
            <td className="px-4 py-2">{employee.email}</td>
            <td className="px-4 py-2">
              {employee.isActive ? "ACTIVE" : "DEACTIVE"}
            </td>
            <td className="px-4 py-2">{employee.isActive ? "Update" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEmployee;

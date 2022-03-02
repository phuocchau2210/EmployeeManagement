import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  toggleModal,
  toggleModalUpdateEmployee,
  updateEmployee,
} from "../store/actionCreators";
import { AppState, IEmployee } from "../store/interfaces";
import PopupComponent from "./PopupComponent";
import TableHeader from "./TableHeader";
import TableDataRow from "./TableDataRow";

export interface ITableEmployeeProps {
  employees: IEmployee[];
}

const TableEmployee = (props: ITableEmployeeProps) => {
  const employees: readonly IEmployee[] = useSelector(
    (state: AppState) => state.employees
  );
  const dispatch: Dispatch<any> = useDispatch();

  const onClickUpdateButton = React.useCallback(
    (employee: IEmployee) => {
      dispatch(toggleModal());
      dispatch(toggleModalUpdateEmployee(employee));
    },
    [dispatch]
  );

  const updateEmployeeInformation = React.useCallback(
    (employee: IEmployee) => {
      dispatch(toggleModal());
      dispatch(updateEmployee(employee));
    },
    [dispatch]
  );

  return (
    <>
      <table className="table-fixed m-4 align-center">
        <TableHeader
          headerTitles={["ID", "Name", "Email", "Status", "Action"]}
        />
        <tbody className="border-2">
          {employees.map((employee) => (
            <TableDataRow
            key={employee.id}
              rowItems={[
                { className: "font-medium", component: <>#{employee.id}</> },
                {
                  className: "",
                  component: (
                    <span className="flex flex-row">
                      <img
                        className="mr-1"
                        src="../src/assets/images/user.png"
                        width="20"
                        height="20"
                      />
                      {employee.name}
                    </span>
                  ),
                },
                {
                  className: "",
                  component: (
                    <span className="flex flex-row">
                      <img
                        className="mr-1"
                        src="../src/assets/images/email.png"
                        width="20"
                        height="20"
                      />
                      {employee.email}
                    </span>
                  ),
                },
                {
                  className: "",
                  component: (
                    <span className="flex flex-row font-medium">
                      {employee.isActive ? (
                        <>
                          <img
                            className="mr-1"
                            src="../src/assets/images/check.png"
                            width="20"
                            height="20"
                          />
                          ACTIVE
                        </>
                      ) : (
                        <>
                          <img
                            className="mr-1"
                            src="../src/assets/images/uncheck.png"
                            width="20"
                            height="20"
                          />
                          DEACTIVE
                        </>
                      )}
                    </span>
                  ),
                },
                {
                  className: "",
                  component: (
                    <>
                      {employee.isActive ? (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => onClickUpdateButton(employee)}
                        >
                          Update
                        </button>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                },
              ]}
            />
          ))}
        </tbody>
      </table>
      <PopupComponent
        actionLable="Save"
        onClickActionButton={updateEmployeeInformation}
        popupTitle="Update Employee Information"
      />
    </>
  );
};

export default TableEmployee;

import { AppState, EmployeeAction, IEmployee } from "./interfaces";
import * as actionTypes from "./actionTypes";
import employeesJson from "../utils/employees.json";
const initialState = { employees: employeesJson.employees };

const reducer = (
  state: AppState = initialState,
  action: EmployeeAction
): AppState => {
  switch (action.type) {
    case actionTypes.UPDATE_EMPLOYEE:
      const newEmployee: IEmployee = {
        id: Math.random(), // not really unique
        name: action.employee.name,
        email: action.employee.email,
        isActive: action.employee.isActive,
      };
      return {
        ...state,
        employees: state.employees.concat(newEmployee),
      };
  }
  return state;
};

export default reducer;

import { AppState, EmployeeAction, IEmployee } from "./interfaces";
import * as actionTypes from "./actionTypes";
import employeesJson from "../utils/employees.json";
const initialState = { employees: employeesJson.employees, isOpenModal: false };

const reducer = (
  state: AppState = initialState,
  action: EmployeeAction
): AppState => {
  switch (action.type) {
    case actionTypes.UPDATE_EMPLOYEE: 
      return {
        ...state,
        employees: state.employees.map(employee => employee.id === action.employee.id ? {...employee, ...action.employee} : employee),
      };

    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
      case actionTypes.SET_CURRENT_UPDATE_EMPLOYEE:
        return {
          ...state,
          currentUpdateEmployee: action.employee,
        };
  }
  return state;
};

export default reducer;

import * as actionTypes from "./actionTypes"
import { DispatchType, EmployeeAction, IEmployee } from "./interfaces"

export function updateEmployee(employee: IEmployee) {
  const action: EmployeeAction = {
    type: actionTypes.UPDATE_EMPLOYEE,
    employee,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: EmployeeAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
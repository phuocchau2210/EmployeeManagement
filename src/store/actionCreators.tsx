import * as actionTypes from "./actionTypes"
import { DispatchType, EmployeeAction, IEmployee } from "./interfaces"

export const updateEmployee = (employee: IEmployee) => {
  const action: EmployeeAction = {
    type: actionTypes.UPDATE_EMPLOYEE,
    employee,
  }
  return action
}

export const toggleModal = () => {
  const action: any = {
    type: actionTypes.TOGGLE_MODAL,
  }
  return action
}

export const toggleModalUpdateEmployee = (employee: IEmployee) => {
  const action: EmployeeAction = {
    type: actionTypes.SET_CURRENT_UPDATE_EMPLOYEE,
    employee,
  }
  return action
}

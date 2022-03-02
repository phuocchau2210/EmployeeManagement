export interface IEmployee {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export type AppState = {
  employees: IEmployee [];
  isOpenModal: boolean;
  currentUpdateEmployee?: IEmployee;
}

export type EmployeeAction = {
  type: string;
  employee: IEmployee;
}

export type DispatchType = (args: EmployeeAction) => EmployeeAction
import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AppState, DispatchType, EmployeeAction } from "../store/interfaces";
import reducer from "../store/reducers";
import TableEmployee from "./TableEmployee";
import Container from "./Container";
import { listEmployees } from "../utils/constant";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store: Store<AppState, EmployeeAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <div className="w-full h-screen flex flex-col items-center bg-gray-600 pt-10">
      <div className="flex flex-col items-center justify-center bg-white rounded-md">
      <img width="129" height="100" src="https://ayp-group.com/wp-content/uploads/2021/11/AYP-logo.png" className="m-10" alt="AYP logo" loading="lazy"/>
        <h1 className="text-3xl font-bold justify-center w-full text-center bg-gray-100 rounded-t-lg">
          Employees Management System
        </h1>
        <TableEmployee employees={listEmployees} />
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);

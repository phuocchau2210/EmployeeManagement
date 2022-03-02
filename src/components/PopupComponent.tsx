import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toggleModal } from "../store/actionCreators";
import { AppState, IEmployee } from "../store/interfaces";

interface IPopupProps {
  children?: any;
  actionLable: string;
  onClickActionButton: (employee: IEmployee) => void;
  popupTitle: string;
}
const PopupComponent = (props: IPopupProps) => {
  const isOpen: any = useSelector((state: AppState) => state.isOpenModal);
  const currentUpdateEmployee: IEmployee = useSelector(
    (state: AppState) => state.currentUpdateEmployee
  );
  const [currentUpdateEmployeeData, setCurrentUpdateEmployeeData] = useState(
    currentUpdateEmployee
  );
  useEffect(() => {
    setCurrentUpdateEmployeeData(currentUpdateEmployee);
  }, [currentUpdateEmployee]);

  const dispatch: Dispatch<any> = useDispatch();

  const closePopup = React.useCallback(() => {
    dispatch(toggleModal());
    // dispatch(toggleModalUpdateEmployee(employee));
  }, [dispatch]);

  const onClickUpdateEmployee = () => {
    props.onClickActionButton &&
      props.onClickActionButton(currentUpdateEmployeeData);
  };

  const onChangeName = (e: any) => {
    const name = e.target.value;
    setCurrentUpdateEmployeeData({ ...currentUpdateEmployeeData, name });
  };

  const onChangeEmail = (e: any) => {
    const email = e.target.value;
    setCurrentUpdateEmployeeData({ ...currentUpdateEmployeeData, email });
  };

  const onChangeStatus = (e: any) => {
    const status = e.target.checked;
    console.log(status)
    setCurrentUpdateEmployeeData({
      ...currentUpdateEmployeeData,
      isActive: status,
    });
  };

  return (
    <>
      {isOpen ? (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {props.popupTitle}
                    </h3>
                    <div className="mt-2">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Name
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={currentUpdateEmployeeData?.name}
                            onChange={(e) => onChangeName(e)}
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Email
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password"
                            type="text"
                            value={currentUpdateEmployeeData?.email}
                            onChange={(e) => onChangeEmail(e)}
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Status
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <div className="ml-10">
                            <input
                              className=" form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                              type="checkbox"
                              checked={currentUpdateEmployeeData?.isActive}
                              onClick={(e) => onChangeStatus(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => onClickUpdateEmployee()}
                >
                  {props.actionLable || "Save"}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => closePopup()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PopupComponent;

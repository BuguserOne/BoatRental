import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../../../redux/slices/uiSlice";
import CrateBoatForm from "../forms/CreateBoatForm";

const Modal = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();
  return (
    <>
      <div
      onClick={() => {
        dispatch(closeModal())
      }}
        className={`${
          modal ? "fixed inset-0 bg-gray-600 z-40 bg-opacity-70}" : "hidden"
        }`}
      ></div>
      <div
        className={`${
          modal
            ? "w-1/2 flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed px-5 py-3 rounded-xl bg-purple-900"
            : "hidden"
        }`}
      >
        <CrateBoatForm />
      </div>
    </>
  );
};

export default Modal;

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/uiSlice";

const BoatSection = () => {
  const dispatch = useDispatch();
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="tex-3xl font-semibold">Deine Boote</h3>
        <button
          onClick={() => {
            dispatch(openModal());
          }}
          className="button w-fit"
        >
          <AiOutlinePlus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default BoatSection;

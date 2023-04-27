import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "../common/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../redux/slices/uiSlice";
import Modal from "../common/Modal";

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Sidebar />
      <Modal />
      <button onClick={() => dispatch(openSidebar())} className="iconButton">
        <AiOutlineMenu className="h-5 w-5" />
      </button>
      <Toaster position="top-center" />
      <Outlet />
    </>
  );
};

export default Layout;

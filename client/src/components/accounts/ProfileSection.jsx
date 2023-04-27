import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../../redux/slices/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    axios.post("/logout");
    dispatch(setUser({}));
    navigate("/");
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-gray-300 italic font-semibold">
        Willkommen bei uns {user?.email}
      </p>
      <p>
        Du kannst deine hochgeladenen Boote, deine Buchungen und dein Profil
        einsehen.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        distinctio impedit voluptate temporibus ipsam aperiam facilis
        perferendis laborum expedita animi qui, in eius, quo similique ipsa
        rerum doloremque odio dolores?
      </p>
      <button onClick={logoutHandler} className="button bg-red-500 w-fit">
        Ausloggen
      </button>
    </div>
  );
};

export default ProfileSection;

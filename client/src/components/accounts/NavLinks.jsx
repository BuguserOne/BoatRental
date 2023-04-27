import React from "react";
import { MdDirectionsBoatFilled, MdOutlineAccountCircle } from "react-icons/md";
import { AiFillCarryOut } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const links = [
  {
    name: "Mein Profil",
    icon: <MdOutlineAccountCircle className="h-5 w-5" />,
    href: "profile",
  },
  {
    name: "Meine Buchungen",
    icon: <AiFillCarryOut className="h-5 w-5" />,
    href: "buchungen",
  },
  {
    name: "Meine Boote",
    icon: <MdDirectionsBoatFilled className="h-5 w-5" />,
    href: "boote",
  },
];

const NavLinks = () => {
  const { subpage } = useParams();
  console.log(subpage);
  return (
    <nav className="flex items-center space-x-5">
      {links.map((link, index) => (
        <Link
        to={`/account/${link.href}`}
          key={index}
          className={`${
            subpage === link.href
              ? "bg-purple-500 text-white text-center"
              : subpage === undefined && index === 0
              ? "bg-purple-500 text-white text-center"
              : ""
          } w-fit flex items-center space-x-1 px-3 py-2 rounded-xl`}
        >
          <i>{link.icon}</i>
          <span className="text-xs">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;

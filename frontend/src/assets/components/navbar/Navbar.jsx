import React from "react";
import { options } from "./options";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[50px] p-4">
      <div className="font-bold text-3xl text-[var(--orange)]">MannMilaap</div>
      <div className="flex gap-3">
        {options.map((option) => {
          return (
            <NavLink className="option" key={option.title} to={option.path}>
              {option.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

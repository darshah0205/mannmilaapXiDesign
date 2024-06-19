import React from "react";
import { options } from "./options";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[70px] p-4">
      <div className="font-bold text-3xl text-[var(--orange)]">MannMilaap</div>
      <div className="flex gap-3 items-center">
        {options.map((option) => {
          return (
            <NavLink
              className={({ isActive }) =>
                `option ${isActive ? "text-[var(--orange)]" : ""}`
              }
              key={option.title}
              to={option.path}
            >
              {option.title}
            </NavLink>
          );
        })}
        <NavLink className="bg-[var(--orange)] p-2 rounded-md" to={"/login"}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

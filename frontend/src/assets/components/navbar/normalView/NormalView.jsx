import React from "react";
import { options } from "../options";
import { NavLink } from "react-router-dom";

const NormalView = () => {
  return (
    <div className="flex gap-3 items-center max-sm:hidden">
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
  );
};

export default NormalView;

import React from "react";
import { groups } from "./groups";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="min-w-[350px] p-4 border-solid border-[var(--yellow)] border-r-2">
      <div className="heading text-4xl font-bold text-center mb-3">Sidebar</div>
      {groups.map((grp) => {
        return (
          <NavLink
            className={({ isActive }) =>
              `option ${
                isActive ? "text-[var(--orange)]" : ""
              } text-xl mb-4 cursor-pointer flex justify-between`
            }
            key={grp.title}
            to={grp.title}
          >
            <div className="title">{grp.title}</div>
            <div className="count text-[var(--green)]">{grp.count}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default AdminSidebar;

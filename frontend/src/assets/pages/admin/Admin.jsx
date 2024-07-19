import React, { useState } from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
// import CustomerTable from "../../components/customerTable/CustomerTable";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const password = "password";
  const [enterPassword, setEnterPassword] = useState(false);

  if (enterPassword && enterPassword === password) {
    return (
      <div className="flex gap-3 p-2 h-[calc(100vh-70px)] overflow-y-hidden overflow-x-auto">
        <AdminSidebar />
        <Outlet />
      </div>
    );
  } else {
    return (
      <input
        placeholder="Enter password"
        onChange={(e) => setEnterPassword(e.target.value)}
      />
    );
  }
};
export default Admin;

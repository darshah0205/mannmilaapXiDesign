import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
// import CustomerTable from "../../components/customerTable/CustomerTable";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex gap-3 p-2 h-[calc(100vh-70px)] overflow-y-hidden">
      <AdminSidebar />
      <Outlet />
    </div>
  );
};

export default Admin;

import React from "react";
import TableContent from "../table/Table";
import { useParams } from "react-router-dom";

const CustomerTable = () => {
  const { group } = useParams();
  return (
    <div className="flex-1 p-4 relative">
      <div className="text-4xl font-bold text-center">{group}</div>
      <div className="search-bar w-full my-4 text-right">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 text-xl border-2 border-solid border-[var(--brown)] rounded-xl"
        />
      </div>
      <TableContent />
    </div>
  );
};

export default CustomerTable;

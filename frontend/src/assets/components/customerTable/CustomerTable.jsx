import React from "react";
import TableContent from "../table/Table";

const CustomerTable = () => {
  return (
    <div className="flex-1 p-4">
      <div className="text-4xl font-bold text-center">Content</div>
      <div className="search-bar max-w-[500px] w-full my-4 mx-auto text-center">
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

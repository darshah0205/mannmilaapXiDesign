import React, { useEffect, useState } from "react";
import TableContent from "../table/Table";
import { useParams } from "react-router-dom";
import { getGroupMembersByID } from "../../../utils/groups";
import { getAllUsers, getAllUsersApproved } from "../../../utils/userDetails";

const CustomerTable = () => {
  const [members, setMembers] = useState(false);
  const [groupName, setGroupName] = useState(false);
  const { groupID } = useParams();
  const getGroupMembers = async () => {
    setTimeout(async () => {
      // Make this function async
      try {
        if (groupID === "all") {
          const members = await getAllUsersApproved(groupID);
          // console.log(members);
          setGroupName("All");
          setMembers(members.data.data);
        } else {
          setMembers(null);
          const members = await getGroupMembersByID(groupID);
          // console.log(members);
          setGroupName(members.data.data[0].name);
          setMembers(members.data.data[0].members);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };

  useEffect(() => {
    // console.log("Use effect");
    getGroupMembers();
  }, [groupID]);

  return (
    <div className="flex-1 p-4 relative">
      <div className="text-4xl font-bold text-center">{groupName}</div>
      <div className="search-bar w-full my-4 text-right">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 text-xl border-2 border-solid border-[var(--brown)] rounded-xl"
        />
      </div>
      {members && <TableContent members={members} groupID={groupID} />}
    </div>
  );
};

export default CustomerTable;

import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TableContent = ({ members, groupID }) => {
  // console.log(members);
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>List of Members</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize={16}>Name</Th>
              <Th fontSize={16}>Gender</Th>
              <Th fontSize={16} isNumeric>
                Contact
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {members &&
              members.map((member) => {
                return (
                  <Tr className="">
                    <Td>
                      {groupID === "all" || groupID === "Requests"
                        ? member.name
                        : member.member.name}
                    </Td>
                    <Td>
                      {groupID === "all" || groupID === "Requests"
                        ? member.gender
                        : member.member.gender}
                    </Td>
                    <Td isNumeric>
                      {groupID === "all" || groupID === "Requests"
                        ? member.email
                        : member.member.email}
                    </Td>
                    <Td className="text-blue-400 underline">
                      <Link
                        to={`/admin/user-details/${
                          groupID === "all" || groupID === "Requests"
                            ? member.email
                            : member.member.email
                        }`}
                      >
                        More Info
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableContent;

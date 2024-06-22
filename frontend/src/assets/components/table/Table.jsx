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

const TableContent = () => {
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
            <Tr className="">
              <Td>Darshit Shah</Td>
              <Td>Male</Td>
              <Td isNumeric>7715919132</Td>
              <Td className="text-blue-400 underline">
                <Link to={"/admin/user-details/darshah"}>More Info</Link>
              </Td>
            </Tr>

            <Tr className="">
              <Td>Pranav Patil</Td>
              <Td>Male</Td>
              <Td isNumeric>9324098270</Td>
              <Td className="text-blue-400 underline">
                <Link to={"/admin/user-details/darshah"}>More Info</Link>
              </Td>
            </Tr>

            <Tr className="">
              <Td>Vishal Patil</Td>
              <Td>Male</Td>
              <Td isNumeric>9082049861</Td>
              <Td className="text-blue-400 underline">
                <Link to={"/admin/user-details/darshah"}>More Info</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableContent;

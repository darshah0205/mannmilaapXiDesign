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
            <Tr className="cursor-pointer">
              <Td>Darshit Shah</Td>
              <Td>Male</Td>
              <Td isNumeric>7715919132</Td>
            </Tr>
            <Tr className="cursor-pointer">
              <Td>Pranav Patil</Td>
              <Td>Male</Td>
              <Td isNumeric>9324098270</Td>
            </Tr>
            <Tr className="cursor-pointer">
              <Td>Vishal Patil</Td>
              <Td>Male</Td>
              <Td isNumeric>9082049861</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableContent;

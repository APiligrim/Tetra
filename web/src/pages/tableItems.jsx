import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
import {
  Heading,
  Flex,
  Text,
  Image,
  Button,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
} from '@chakra-ui/react';
import items from './items';
import '../assets/scroll.css';
import '../assets/overall.css'

const Row = props => {
  const [state, setState] = useState({
    tableItems: items,
  });
  const { tableItems } = state;
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        textAlign="center"
        fontSize="md"
        p={6}
        bgColor="gray.900"
        borderRadius="md"
        flexDirection="column"
        justifyContent="space-between"
        width="85%"
        alignItems="center"
        height="76vh"
                  className="box-container"
      >
        <Flex
          width="100%"
          alignItems="center"
          rounded="md"
          flexDirection="column"
        >
          <Heading fontSize="2xl" mb={10}>
           Product Inventory
          </Heading>
          <Flex
            justifyContent="space-evenly"
            width="100%"
            flexDirection="column"
          >
            <Flex justifyContent="space-evenly">
              <Table variant="simple" mb={4} width="50%">
                <Thead>
                  <Tr>
                    <Th>Select</Th>
                    <Th>Code</Th>
                    <Th>Name</Th>
                    <Th>Color</Th>
                    <Th>Collection</Th>
                    <Th>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {tableItems.map((element, index)=> <ItemRow {...element}/>)}   
                </Tbody>
              </Table>
            
            </Flex>
          </Flex>
        </Flex>
        <Button className="yellow-btn" colorScheme="green" size="lg">Fulfill</Button>
      </Flex>
    </Flex>
  );
};

const ItemRow = ({ssn, name, collection,price, color, })=>{
    return (
        <Tr>
            <Td>
            <Checkbox colorScheme="green" />
            </Td>
            <Td>{ssn}</Td>
            <Td>{name}</Td>
            <Td>{color}</Td>
            <Td>{collection}</Td>
            <Td>{price}</Td>
        </Tr>
    );
}
export default withRouter(Row);

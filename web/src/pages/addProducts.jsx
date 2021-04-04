import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
import bkTable from '../assets/img/background-table.png';
import '../assets/overall.css';
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
  useToast,
} from '@chakra-ui/react';
import items from './items';
import '../assets/scroll.css';

const AddParts = ({ history }) => {
  const toast = useToast();
  const createItem = () => {
    toast({
      position: 'bottom-left',
      title: 'Success',
      description: 'Created successfully!',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    history.push('/dashboard');
  };
  return (
    <Flex justifyContent="center" alignItems="center">
      <img src={bkTable} />
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
        className="box-container arrange-to-top"
      >
        <Flex
          width="100%"
          alignItems="center"
          rounded="md"
          flexDirection="column"
        >
          <Heading fontSize="2xl" mb={10}>
            Product Management
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
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>4414</Td>
                    <Td>Leather</Td>
                    <Td>Black</Td>
                  </Tr>
                </Tbody>
              </Table>
              <Flex
                bg="gray.800"
                p={5}
                flexDir="column"
                rounded="md"
                mr={5}
                width="20vw"
              >
                <Heading fontSize="2xl" mb={6}>
                  Create a new product
                </Heading>
                <Stack spacing={4} marginBottom="auto">
                  <InputGroup>
                    <InputLeftAddon children="SSN" width="6vw" />
                    <Input placeholder="Product SSN" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Name" width="6vw" />
                    <Input placeholder="Product Name" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Color" width="6vw" />
                    <Input placeholder="Product Color" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Price" width="6vw" />
                    <Input placeholder="Product Price" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Collection" width="6vw" />
                    <Input placeholder="Product Collection" />
                  </InputGroup>
                </Stack>
                <Button
                  className="yellow-btn"
                  colorScheme="green"
                  mt={5}
                  onClick={createItem}
                >
                  CREATE
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Card = ({ ssn, name, url, deadline }) => {
  return (
    <Flex bg="gray.700" p={4} flexDirection="column" width="30%" rounded="md">
      <Image height={220} src={url} alt={name} />
      <Flex width="100%" textAlign="start" marginTop={4} flexDirection="column">
        <Heading as="h5" size="sm" color="gray.400">
          {ssn}
        </Heading>
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="baseline"
          my={2}
        >
          <Heading isTruncated as="h3" size="lg">
            {name}
          </Heading>
          <Heading as="h5" size="md">
            {deadline}
          </Heading>
        </Flex>
        <Button colorScheme="red" width="60%" alignSelf="center" mt={2}>
          RECYCLE
        </Button>
      </Flex>
    </Flex>
  );
};
export default withRouter(AddParts);

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
import bkTable from '../assets/img/background-table.png';
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
  useToast,
} from '@chakra-ui/react';
import items from './items';
import '../assets/scroll.css';

const AddParts = ({ history }) => {
  const toast = useToast();
  const [state, setState] = useState({
    recycleItems: items,
  });
  const { recycleItems } = state;

  const addItem = () => {
    toast({
      position: 'bottom-left',
      title: 'Success',
      description: 'Added successfully!',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
  };

  const sendItem = () => {
    toast({
      position: 'bottom-left',
      title: 'Success',
      description: 'Sent successfully!',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    history.push('/dashboard');
  };
  return (
    <Flex justifyContent="center" alignItems="center">
      <img src={bkTable} alt="bg" />
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
        className="box-container arrange-to-top"
      >
        <Flex
          width="100%"
          alignItems="center"
          height="73vh"
          rounded="md"
          flexDirection="column"
        >
          <Heading fontSize="2xl" mb={10}>
            Part Management
          </Heading>
          <Flex justifyContent="space-evenly" width="100%">
            <Flex
              bg="gray.800"
              p={5}
              flexDir="column"
              rounded="md"
              mr={5}
              width="20vw"
            >
              <Heading fontSize="2xl" mb={6}>
                Add a new material
              </Heading>
              <Stack spacing={4} marginBottom="auto">
                <InputGroup>
                  <InputLeftAddon children="Code" width="5vw" />
                  <Input placeholder="Part Code" />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Name" width="5vw" />
                  <Input placeholder="Part Name" />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Color" width="5vw" />
                  <Input placeholder="Part Color" />
                </InputGroup>
              </Stack>
              <Button
                className="yellow-btn"
                colorScheme="green"
                mt={5}
                onClick={addItem}
              >
                ADD
              </Button>
            </Flex>
            {
              // Card
            }
            <Flex
              bg="gray.800"
              p={5}
              flexDir="column"
              rounded="md"
              width="20vw"
            >
              <Heading fontSize="2xl" mb={6}>
                Ship material
              </Heading>
              <Stack spacing={4} marginBottom="auto">
                <Select placeholder="Select material">
                  <option value="option1">3303 - Leather, Black</option>
                  <option value="option2">8593 - Metal, Silver</option>
                  <option value="option3">1106 - Cotton, White</option>
                </Select>
                <Select placeholder="Select Factory">
                  <option value="option1">XU44 - New York, USA</option>
                  <option value="option2">VE63 - San Francisco, USA</option>
                  <option value="option3">O44X - Austin, USA</option>
                </Select>
                <Select placeholder="Select Shipper">
                  <option value="option1">SHP2 - ShipIt, NYC</option>
                  <option value="option2">USPS - USYX, FL</option>
                  <option value="option3">TXW4 - Texan, TX</option>
                </Select>
              </Stack>
              <Button
                className="yellow-btn"
                colorScheme="green"
                onClick={sendItem}
              >
                SEND
              </Button>
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

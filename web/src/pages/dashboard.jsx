import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
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
import { ArrowForwardIcon } from '@chakra-ui/icons';
import items from './items';
import '../assets/scroll.css';
import Background from '../assets/img/background-table.png';

const Dashboard = ({ history }) => {
  const toast = useToast();
  const moveTo = org => {
    if (org === 'Supplier') {
      history.push(`/addParts`);
    } else if (org === 'Factory') {
      history.push(`/addProducts`);
    } else {
      history.push(`/tableItems/${org}`);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <img src={Background}/>
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
        className='arrange-to-top'
      >
        <Flex
          width="100%"
          alignItems="center"
          rounded="md"
          flexDirection="column"
        >
          <Heading fontSize="2xl" mb={10}>
            Management Dashboard
          </Heading>
          <Flex
            justifyContent="space-evenly"
            width="100%"
            flexDirection="column"
          >
            <Flex justifyContent="space-evenly" mb={100} alignItems="center">
              <DashboardButton fn={() => moveTo('Supplier')} name="Supplier" />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton fn={() => moveTo('Factory')} name="Factory" />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton fn={() => moveTo('Shipping')} name="Shipping" />
            </Flex>
            <Flex justifyContent="space-evenly" mb={100} alignItems="center">
              <DashboardButton
                fn={() => moveTo('Warehouse')}
                name="Warehouse"
              />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton
                fn={() => moveTo('Retail Store')}
                name="Retail Store"
              />
              <ArrowForwardIcon fontSize={30} />

              <DashboardButton
                fn={() => moveTo('Recycle Team')}
                name="Recycle Team"
              />
            </Flex>
            <DashboardButton
              fn={() => moveTo('Transportation')}
              name="Transportation"
              alignSelf="center"
              width="15vw"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const DashboardButton = ({ name, fn, ...props }) => (
  <Button
    className="yellow-btn"
    colorScheme="green"
    onClick={fn}
    size="lg"
    width="10vw"
    {...props}
  >
    {name}
  </Button>
);

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
export default withRouter(Dashboard);

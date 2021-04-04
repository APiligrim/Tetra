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

const Dashboard = ({ history, screens, setScreens }) => {
  const moveTo = org => {
    setScreens(screens => [...screens, org]);
    if (org === 'Supplier') {
      history.push(`/addParts`);
    } else if (org === 'Factory') {
      history.push(`/addProducts`);
    } else if (org === 'Retail Store') {
      history.push(`/recycle`);
    } else {
      history.push(`/tableItems/${org}`);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <img alt="bg" src={Background} />
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
        className="arrange-to-top"
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
              <DashboardButton
                fn={() => moveTo('Supplier')}
                name="Supplier"
                screens={screens}
              />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton
                fn={() => moveTo('Factory')}
                name="Factory"
                screens={screens}
              />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton
                fn={() => moveTo('Shipping')}
                name="Shipping"
                screens={screens}
              />
            </Flex>
            <Flex justifyContent="space-evenly" mb={100} alignItems="center">
              <DashboardButton
                fn={() => moveTo('Warehouse')}
                name="Warehouse"
                screens={screens}
              />
              <ArrowForwardIcon fontSize={30} />
              <DashboardButton
                fn={() => moveTo('Retail Store')}
                name="Retail Store"
                screens={screens}
              />
              <ArrowForwardIcon fontSize={30} />

              <DashboardButton
                fn={() => moveTo('Recycle Team')}
                name="Recycle Team"
                screens={screens}
              />
            </Flex>
            <DashboardButton
              fn={() => moveTo('Transportation')}
              name="Transportation"
              alignSelf="center"
              width="15vw"
              screens={screens}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const DashboardButton = ({ name, fn, screens, ...props }) => {
  let color = { backgroundColor: 'yellow' };
  if (screens.includes(name)) {
    color['backgroundColor'] = 'green.400';
  }

  return (
    <Button
      colorScheme="green"
      onClick={fn}
      size="lg"
      width="10vw"
      {...color}
      {...props}
    >
      {name}
    </Button>
  );
};

export default withRouter(Dashboard);

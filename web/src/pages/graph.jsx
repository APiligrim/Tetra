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
import '../assets/scroll.css';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import PieChart from './pieChart';

const Graph2 = ({ history }) => {
  return (
    <>
      <Heading mb={5}>Recycle Ratio</Heading>
      <ParentSize>
        {({ width, height }) => (
          <PieChart width={width} height={height - 140} />
        )}
      </ParentSize>
    </>
  );
};

export default withRouter(Graph2);

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FaShoppingBag, FaWarehouse } from 'react-icons/fa';
import { GiFactory } from 'react-icons/gi';
import { RiShip2Line, RiBuilding2Line, RiRecycleFill } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';
import {
  Heading,
  Flex,
  Text,
  Image,
  Button,
  Box,
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

const Timeline = props => {
  const [selected, setSelected] = useState('leather');

  const [state, setState] = useState({
    leather: [
      {
        name: 'Supplier',
        location: 'Texas, USA',
        description: 'The leather was manufactured here',
        color: '#171a23',
        Icon: RiBuilding2Line,
        date: 'Dec 2020',
      },
      {
        name: 'Factory',
        location: 'San Francisco, USA',
        description: 'The leather was created into a bag',
        color: '#171a23',
        Icon: GiFactory,
        date: 'Jan 2021',
      },
      {
        name: 'Shipping',
        location: 'New York, USA',
        description: 'The bag was shipped from here',
        color: '#171a23',
        Icon: RiShip2Line,
        date: 'Jan 2021',
      },
      {
        name: 'Warehouse',
        location: 'Montreal, CA',
        description: 'The bag was stored here',
        color: '#171a23',
        Icon: FaWarehouse,
        date: 'Feb 2021',
      },
      {
        name: 'Retail Store',
        location: 'Toronto, CA',
        description: 'The bag was bought here',
        color: '#171a23',
        Icon: AiOutlineShop,
        date: 'Apr 2021',
      },
    ],
    metal: [
      {
        name: 'Supplier',
        location: 'Montreal, CA',
        description: 'The metal was manufactured here',
        color: '#171a23',
        Icon: RiBuilding2Line,
        date: 'Dec 2019',
      },
      {
        name: 'Factory',
        location: 'Waterloo, CA',
        description: 'The metal was created into a belt',
        color: '#171a23',
        Icon: GiFactory,
        date: 'Jan 2019',
      },
      {
        name: 'Shipping',
        location: 'Vancouver, CA',
        description: 'The belt was shipped from here',
        color: '#171a23',
        Icon: RiShip2Line,
        date: 'Feb 2019',
      },
      {
        name: 'Warehouse',
        location: 'San Francisco, USA',
        description: 'The belt was stored here',
        color: '#171a23',
        Icon: FaWarehouse,
        date: 'Mar 2019',
      },
      {
        name: 'Retail Store',
        location: 'Boston, USA',
        description: 'The belt was stored here',
        color: '#171a23',
        Icon: AiOutlineShop,
        date: 'Apr 2019',
      },
      {
        name: 'Recycle Center',
        location: 'Maine, USA',
        description: 'The belt was collected here',
        color: '#171a23',
        Icon: AiOutlineShop,
        date: 'Jul 2019',
      },
      {
        name: 'Supplier',
        location: 'Texas, USA',
        description: 'The metal was recycled here',
        color: '#16CC76',
        Icon: RiRecycleFill,
        date: 'Dec 2020',
      },
      {
        name: 'Factory',
        location: 'San Francisco, USA',
        description: 'The metal was created into a bag',
        color: '#171a23',
        Icon: GiFactory,
        date: 'Jan 2021',
      },
      {
        name: 'Shipping',
        location: 'New York, USA',
        description: 'The bag was shipped from here',
        color: '#171a23',
        Icon: RiShip2Line,
        date: 'Jan 2021',
      },
      {
        name: 'Warehouse',
        location: 'Montreal, CA',
        description: 'The bag was stored here',
        color: '#171a23',
        Icon: FaWarehouse,
        date: 'Feb 2021',
      },
      {
        name: 'Retail Store',
        location: 'Toronto, CA',
        description: 'The bag was bought here',
        color: '#171a23',
        Icon: AiOutlineShop,
        date: 'Apr 2021',
      },
    ],
  });
  const data = state[`${selected}`];
  return (
    <>
      <Flex>
        <Flex width="70%" overflow="auto">
          <VerticalTimeline>
            {data.map((e, i) => {
              return <Element key={i} {...e} />;
            })}

            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaShoppingBag />}
            />
          </VerticalTimeline>
        </Flex>

        <Flex
          padding="10"
          width="30%"
          left="70%"
          position="fixed"
          height="100%"
        >
          <Flex
            bg="gray.700"
            p={4}
            width="100%"
            flexDirection="row"
            flexWrap="wrap"
            height="70vh"
            rounded="md"
          >
            <Box
              p="6"
              rounded="md"
              bg="#171a23"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="yellow"
              flex="100%"
            >
              <Flex justifyContent="space-between">
                <Heading color="white" fontSize="2xl" fontWeight="extrabold">
                  Item: Bag
                </Heading>
                <Heading color="white" fontSize="2xl">
                  SSN: EB5A7F
                </Heading>
              </Flex>
            </Box>
            <Image
              margin="auto"
              height={200}
              padding="3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKI7qN7sUrSClCERX2hVVHbrRq4QYbKs8kWQ&usqp=CAU"
            />
            <Heading color="white" fontSize="2xl" flex="0 1 100%">
              Material
            </Heading>
            <Flex width="100%" justifyContent="space-around">
              <Card
                name="leather"
                selected={selected}
                setSelected={setSelected}
                img="https://sourcingjournal.com/wp-content/uploads/2019/09/leather.jpg"
              />
              <Card
                name="metal"
                selected={selected}
                setSelected={setSelected}
                img="https://www.proactiveinvestors.com/thumbs/upload/News/Image/2020_03/672z311_1583185812_mound-of-gold-close-up-on-black-background.jpg"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const Card = ({ name, selected, setSelected, img }) => {
  return (
    <Flex backgroundColor={selected === name ? '#16CC76' : '#171a23'} mr={3}>
      <Image
        margin="auto"
        height={150}
        width={200}
        padding="3"
        src={img}
        onClick={() => setSelected(name)}
      />
    </Flex>
  );
};

const Element = ({ name, location, description, Icon, color, date }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#171a23',
        color: '#fff',
        borderWidth: '2px',
        borderColor: 'yellow',
        borderStyle: 'solid',
      }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      iconStyle={{ background: color, color: '#fff' }}
      icon={<Icon />}
    >
      <h1 className="vertical-timeline-element-title">{name}</h1>
      <h5 className="vertical-timeline-element-subtitle">{location}</h5>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default withRouter(Timeline);

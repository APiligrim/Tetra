import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { GiFactory } from 'react-icons/gi';
import { RiShip2Line, RiBuilding2Line } from 'react-icons/ri';
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
        },
        {
          name: 'Factory',
          location: 'San Francisco, USA',
          description: 'The leather was created into a bag',
          color: '#171a23',
          Icon: GiFactory,
        },
        {
          name: 'Shipping',
          location: 'Texas, USA',
          description: 'The bag was shipped from here',
          color: '#171a23',
          Icon: RiShip2Line,
        }
      ],
      metal: [
        {
          name: 'Supplier',
          location: 'Florida, USA',
          description: 'The metal was manufactured here',
          color: '#171a23',
          Icon: RiBuilding2Line,
        },
        {
          name: 'Factory',
          location: 'Colorado, USA',
          description: 'The metal was created into a bag',
          color: '#171a23',
          Icon: GiFactory,
        },
        {
          name: 'Shipping',
          location: 'New York, USA',
          description: 'The bag was shipped from here',
          color: '#171a23',
          Icon: RiShip2Line,
        }
      ]
    })
    const data = state[`${selected}`];
    console.log(data, selected);
    return (
      <>
      <Flex>
        <Flex width="50%" padding = "10" overflow="auto">
        <VerticalTimeline>
          {
            data.map((e,i)=>{
              return <Element key={i} {...e} />
            })
          }

            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaShoppingBag />}
            />
          </VerticalTimeline>
        </Flex>

        <Flex padding = "10" width="50%" left="50%" position= "fixed" height= "100%">
          <Flex bg="gray.700" p={4} width="100%" flexDirection="row" flexWrap= "wrap" height="70vh" rounded="md" alignItems="center">
            <Box p="6" rounded="md" bg= "#171a23" borderStyle='solid' borderWidth='2px' borderColor = "yellow" flex="100%">
              <Flex justifyContent="space-between">

              <Heading color="white" fontSize="2xl"  fontWeight="extrabold">Item: Bag</Heading>
              <Heading color="white" fontSize="2xl">SSN: 58334</Heading>
              </Flex>
            </Box>
              <Image margin="auto" height={250} padding="3" src="http://placeimg.com/640/480/fashion" />
              <Heading color="white" fontSize="2xl" flex="0 1 100%">Components</Heading>
            <Flex width="100%" justifyContent="space-around">

              <Card name="leather" selected={selected} setSelected={setSelected}/>
              <Card name="metal" selected={selected} setSelected={setSelected}/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      </>
    );
  };

  const Card = ({name, selected, setSelected}) => {
    console.log("SLEC", selected, name)
    return (
    <Flex backgroundColor={selected === name ? "#16CC76":"#171a23"}>
    <Image margin="auto" height={200} padding="3" src="http://placeimg.com/640/480/fashion" onClick={()=>setSelected(name)} />
    </Flex>

    )
  }

const Element = ({name, location, description, Icon, color}) => {
  return (<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#171a23', color: '#fff', borderWidth: '2px', borderColor: "yellow", borderStyle: "solid" }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: color, color: '#fff' }}
    icon={<Icon/>}
  >
    <h3 className="vertical-timeline-element-title">{name}</h3>
    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    <p>
      {description}
    </p>
  </VerticalTimelineElement>)
}

  export default withRouter(Timeline);
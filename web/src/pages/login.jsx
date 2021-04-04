import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
import loginBackground from '../assets/img/login.gif'
import '../assets/overall.css';
import {
  Button,
  Heading,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';

const Login = props => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const { setCurrentUser } = props;

  const handleChange = event => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const success = () => {
      setLoading(false);
      toast({
        position: 'bottom-left',
        title: 'Success',
        description: 'Welcome back.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      props.history.push('/');
    };

    if (!username || !password) {
      toast({
        position: 'bottom-left',
        title: 'Missing Fields.',
        description: 'Please fill in all the data.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    } else {
      const body = state;
      fetchApi('/signIn', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => {
          if (!json.success) throw Error(json.message);
          setCurrentUser({
            ...json,
          });
          localStorage.setItem('app-user', JSON.stringify(json));
          success();
        })
        .catch(err => {
          console.log(err);
          toast({
            position: 'bottom-left',
            title: 'Could not log you in',
            description: err.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        });
    }
  };

  const { username, password } = state;
  return (
    <Flex justifyContent="center" alignItems="center" height="70vh">
        <img src={loginBackground} />
    <div className="arrange-to-top"> 
      <Flex
        textAlign="center"
        fontSize="md"
        p={6}
        bgColor="gray.900"
        borderRadius="md"
        flexDirection="column"
        height="45vh"
        justifyContent="space-between"
      >
        <Heading fontSize="2xl">Welcome Back.</Heading>
        <Input
          placeholder="Username"
          value={username}
          name="username"
          onChange={handleChange}
          pr="4.5rem"
        />

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isLoading={loading ? true : false}
          loadingText="Submitting"
          className='yellow-btn'
        >
          Submit
        </Button>
      </Flex>
      </div>
    </Flex>
  );
};

export default withRouter(Login);

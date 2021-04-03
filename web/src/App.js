import React, { useState } from 'react';
import {
  Button,
  ChakraProvider,
  Box,
  Heading,
  Spacer,
  Flex,
  Text,
  extendTheme,
} from '@chakra-ui/react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Page imports

// Component imports
import Fonts from './components/Fonts';
import ResRoute from './components/ResRoute';

const App = props => {
  let user = JSON.parse(localStorage.getItem('app-user'));
  if (!user) user = null;
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Box textAlign="center" fontSize="xl" p={6} height="100vh">
        <Nav history={props.history} currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={() => <Text>Home</Text>} />
        </Switch>
      </Box>
    </ChakraProvider>
  );
};

const customTheme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: props => ({
      'html, body': {
        fontSize: 'md',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    }),
  },
  colors: {
    brand: {
      100: '#001348',
      200: '#00316A',
      300: '#009CD6',
    },
  },
  components: {
    Button: {
      baseStyle: {},
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
});

const Nav = ({ history, currentUser }) => {
  return (
    <Flex>
      <Box>
        <Heading
          onClick={() => history.push('/')}
          size="2xl"
          fontFamily="Allan"
          cursor="pointer"
        >
          APP
        </Heading>
      </Box>
      <Spacer />
      {currentUser ? (
        // Signed In User
        <Box>
          <Button mr="1rem" onClick={() => history.push('/profile')}>
            Profile
          </Button>
          <Button mr="1rem" onClick={() => history.push('/logout')}>
            Log out
          </Button>
        </Box>
      ) : (
        // No user
        <Box>
          <Button mr="1rem" onClick={() => history.push('/login')}>
            Log in
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default withRouter(App);

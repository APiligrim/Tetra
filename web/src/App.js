import React, { useState } from 'react';
import { Button, Box, Heading, Spacer, Flex, Text } from '@chakra-ui/react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Page imports
import Login from './pages/login';
import Recycle from './pages/recycle';

// Component imports
import Fonts from './components/Fonts';
import ResRoute from './components/ResRoute';

const App = props => {
  let user = JSON.parse(localStorage.getItem('app-user'));
  if (!user) user = null;
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <>
      <Fonts />
      <Box textAlign="center" fontSize="xl" p={6} height="100vh">
        <Nav history={props.history} currentUser={currentUser} />

        <Switch>
          <Route exact path="/" component={() => <Text>Home</Text>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recycle" component={Recycle} />
        </Switch>
      </Box>
    </>
  );
};

const Nav = ({ history, currentUser }) => {
  return (
    <Flex marginBottom={3}>
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

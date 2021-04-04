import React, { useState } from 'react';
import { Button, Box, Heading, Spacer, Flex, Text } from '@chakra-ui/react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
//Style imports
import './assets/overall.css';
import logo from './assets/img/logo2.svg';
import homeBackground from './assets/img/tetra-web.gif';
// Page imports
import Login from './pages/login';
import Recycle from './pages/recycle';
import TableItems from './pages/tableItems';
import Dashboard from './pages/dashboard';
import AddParts from './pages/addParts';
import AddProducts from './pages/addProducts';
import Logout from './pages/logout';

// Component imports
import Fonts from './components/Fonts';

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
          <Route
            exact
            path="/"
            component={() => {
              return currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <img
                  src={homeBackground}
                  alt="home-screen"
                  className="home-screen"
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            component={() => <Login setCurrentUser={setCurrentUser} />}
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/recycle" component={Recycle} />
          <Route exact path="/tableItems/:org" component={TableItems} />
          <Route exact path="/addParts" component={AddParts} />
          <Route exact path="/addProducts" component={AddProducts} />
          <Route
            exact
            path="/logout"
            component={() => <Logout setCurrentUser={setCurrentUser} />}
          />
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
          <img className="logo" alt="logo" src={logo} />
        </Heading>
      </Box>
      <Spacer />
      {currentUser ? (
        // Signed In User
        <Box>
          <Button
            mr="1rem"
            colorScheme="yellow"
            variant="outline"
            onClick={() => history.push('/profile')}
          >
            Profile
          </Button>
          <Button
            mr="1rem"
            colorScheme="yellow"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        </Box>
      ) : (
        // No user
        <Box>
          <Button
            className="yellow-btn"
            colorScheme="green"
            mr="1rem"
            onClick={() => history.push('/login')}
          >
            Log in
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default withRouter(App);

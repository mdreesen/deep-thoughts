import React from 'react';
// importing BrowserRouter, BrowserRouter and Route are components that the React Router library provides. 
// We renamed "BrowserRouter" to "Router" to make it easier to work with
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing other page components
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

// adding the two library import statements
// is a special type of React component that we'll use to provide data to all of the other components
import { ApolloProvider } from  '@apollo/react-hooks';
// to get that data when we're ready to use it
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// need to have absolute path to get GraphQL
// URI stands for "Uniform Resource Identifier"
// changed "http://localhost/graphql" to "/graphql". Need to change this in package.json
//  "proxy": "http://localhost:3001", needs to be added to package.json
// This should now work in development and production envs
const client = new ApolloClient({
  uri: '/graphql'
});

// wrapped everything in the ApolloProvider
// the "?" means this parameter is options, so "/profile" and "/profile/username" will both render the Profile component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/profile/:username?' component={Profile}/>
                <Route exact path='/thought/:id' component={SingleThought}/>

                <Route component={NoMatch}/>
              </Switch>
            </div>
          <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';

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
function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;

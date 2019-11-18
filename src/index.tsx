import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './index.css';
import App from './App';
import ToDoItem from './components/ToDoItem';


export const client = new ApolloClient ({
    uri: 'https://plp0mopxq.sse.codesandbox.io/'
  });


  const Routes = () => (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/:todoId" component={ToDoItem}/>
    </Router>
  )
  
ReactDOM.render(
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Routes />
      </ApolloHooksProvider>
    </ApolloProvider>, 
  document.getElementById('root'));


import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'
import './styles/App.css'

import Home from './pages/Home'
import Products from './pages/Products'

import client from './services/Client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={Products}></Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import {Login} from './components/Login'
import {Register} from './components/Register'
import {Home} from './components/Home'
import Form from './components/Form'
import ViewPlanification from './components/View'




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Login} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/PE' component={Form} />
        <Route exact path='/view/:id' component={ViewPlanification} />


      </Layout>
    );
  }
}

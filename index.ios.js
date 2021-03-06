/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import Main from './app/containers/main'

const loggerMiddleware = createLogger()

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
  return createStore(reducer, initialState, enhancer)                       
}

const store = configureStore({})

const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)

AppRegistry.registerComponent('Project', () => App)

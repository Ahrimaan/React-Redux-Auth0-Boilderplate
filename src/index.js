import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger'
import reducers from './reducers';
import NavigationBar from './components/navigation-bar';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          { /* <Route exact={true} path="/posts/new" component={PostNew} /> */}

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

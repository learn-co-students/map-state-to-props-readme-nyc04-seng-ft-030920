import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-rexux';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);

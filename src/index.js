import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Thunk} from 'thunk';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';


const store = createStore(rootReducer, applyMiddleware(Thunk));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

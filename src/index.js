import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
    <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



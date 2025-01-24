import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'; // Adjust the path as needed
import Home from './Home.js'; // Example screen

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </StrictMode>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Loginjshey from './components/Login';
import Loginjshey from './components/Details';
import Login from './components/Login';
import Signup from './components/SignUp';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import { Provider } from 'react-redux'
import store from './redux/store.jsx';
import { ChakraBaseProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ChakraBaseProvider>
    <Provider store={store}>
    <App />
  </Provider>
  // </ChakraBaseProvider>
    // <App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './Components/Header';
import Routes from './routes';

import store from './store';

function App() {
    return (
        <Provider store = {store}>
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
        </Provider>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware,  createStore } from 'redux';
import reducers from './redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


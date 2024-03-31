import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import MyRouter from "./router/MyRouter.jsx";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MyRouter/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)

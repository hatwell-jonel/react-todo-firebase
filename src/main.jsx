import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss';

import { Provider } from 'react-redux';
import store  from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(

  // COMMENT StrictMode because Current version of react-dnd does not support <React.StrictMode /> for "react":^18. You might find a temporary solution at this issue (remove StrictMode)
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
)

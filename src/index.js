import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { init } from '@three0dev/js-sdk';
import './App.css'
import { env } from './env';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/Reducer";

import ReactDOM from 'react-dom/client';
init(env.three0Config)
  .then(() => {
    const container = document.querySelector('#root')
    const root = createRoot(container)
    // eslint-disable-next-line react/jsx-filename-extension
    root.render(
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    )
  })
  .catch(console.error)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//   </StateProvider>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

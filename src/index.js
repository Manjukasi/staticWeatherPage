import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Body';
import './index.css'

const App = () => {
  return (
    <>
    <Body />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


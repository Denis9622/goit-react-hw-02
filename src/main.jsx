import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App/App"


// const App = () => {
//   return <p>Hello React</p>;
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

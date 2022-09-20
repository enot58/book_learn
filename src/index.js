import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const ColorContext = createContext();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ColorContext.Provider value={{colors}}>
      <App />
    </ColorContext.Provider>

  </React.StrictMode>
);

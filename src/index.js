import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorProvider from "./hooks/colors_hook"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ColorProvider>
      <App />
    </ColorProvider>

  </React.StrictMode>
);

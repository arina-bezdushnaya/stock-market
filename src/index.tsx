import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'antd/dist/antd.variable.min.css';
import {ConfigProvider} from 'antd';
import {color} from './theme';

ConfigProvider.config({
  theme: {
    primaryColor: color.primary,

  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);

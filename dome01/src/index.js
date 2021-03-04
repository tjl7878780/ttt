import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home'
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

moment.locale('zh-cn');
 
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();

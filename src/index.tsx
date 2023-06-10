import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Hello from "./components/Hello";
import Name from "./components/Name";
import Message from './components/Message';
import Parent from './components/Parent';
import Parent2 from './components/Parent2';
import ContextSample from './components/ContextSample';
import Counter from './Counter';
import Counter2 from './components/Counter2';
import { Parent3 } from "./components/Parent3";
import { Parent4 } from "./components/Parent4";
import { Parent5 } from "./components/Parent5";
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from "./components/Clock";
import Parent6 from "./components/Parent6";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
{/*
		<Hello />
		<Name />
		<Message />
		<Parent />
		<Parent2 />
		<ContextSample />
		<Counter initialValue={3} />
		<Counter2 initialValue={3} />
		<Parent3 />
		<Parent4 />
		<Parent5 />
		<UseMemoSample />
		<Clock />
	*/}
		<Parent6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

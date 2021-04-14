import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from "./components/Dialogs/Dialogs";

let dialogs = [
    {id: '1', name: 'Sasha'},
    {id: '2', name: 'Misha'},
    {id: '3', name: 'Vasya'},
    {id: '4', name: 'Bodya'},
    {id: '5', name: 'Roma'},
    {id: '6', name: 'Vanya'},
]

let messages = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Chao'},
]

let posts = [
    {id: '1', post: 'Hello', likesCount: '5'},
    {id: '2', post: 'How are you?', likesCount: '72'},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

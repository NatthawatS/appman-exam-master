import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inputname from './../components/Input.js';
import Button from './../components/Button.js';
import Textname from './../components/Textname.js';

class App extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Textname/>
                <input className="Input" />
                <div>Password</div>
                <input className="Input" />
                <Button />
                <div className = "a">
                <text className="Name">Forgot Password ?</text>
                <text className="Name">Create a new account</text>
                </div>
            </div>
        );
    }
}

export default App;

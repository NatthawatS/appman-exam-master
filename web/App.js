import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Fromemail from './../components/Fromemail.js';
import Frompass from './../components/Frompass.js';
import Frombutton from './../components/Button.js';
import Create from './../components/Createanewaccount.js';
import Forgot from './../components/Forgotpassword';

class App extends React.Component {
    render() {
        return (

            <div className="App-header">
                <div className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <Fromemail />
                <Frompass />
                <Frombutton />
                {/* <Create/>
                 <Forgot/> */}
            </div>
        );
    }
}

export default App;

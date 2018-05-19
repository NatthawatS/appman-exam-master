import React from 'react';
import './Fromemail.css';

class Frompass extends React.Component {
  render() {
    return (
      <div>
        <div >
          <label for="inputPassword" >Password</label>
          <div >
          <input type="password" className="control" id="inputPassword" placeholder="your Password" ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Frompass;
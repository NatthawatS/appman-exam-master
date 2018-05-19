import React from 'react';
import './../components/Fromemail.css';

class Fromemail extends React.Component {
  render() {
    return (
      <div>
        <div class="form-group row">
          <label for="inputemail" class="col-sm-2 col-form-label">E-mail address</label>
          <div class="col-sm-10">
            <input className="control" id="inputemail" placeholder="youremail@example.com" ></input>
          </div>
        </div>
      </div>
    );
  }
}


export default Fromemail;
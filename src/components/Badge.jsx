import React from 'react';
import me from './../../images/me.png';


function Badge() {

  let container = {
    width: '350px'
  }

  let white = {
    backgroundColor: 'white',
    height: '100px',
    border: 'blue solid 1px',
    padding: '2em'
  }

  let name = {
    float: 'left',
    marginBottom: '0',
    color: 'white'
  }

  let paddingAll = {
    padding: '0 20px 0 20px',
    border: '1px solid blue',
    backgroundColor: 'black'
  }

  let textColor = {
    color: 'white',
    fontsize: '10px',
    textAlign: 'right'
  }

  return (
    <div style={container}>

      <div style={white}>
      <img id="profile" src={me}/>
      </div>

      <div style={paddingAll}>
        <h2 style={name}>CLARA MUNRO</h2>
        <div>
        <h4 style={textColor}>TWEETS  FOLLOWING  FOLLOWERS</h4>
        </div>
      </div>

    </div>
  );
}

export default Badge;
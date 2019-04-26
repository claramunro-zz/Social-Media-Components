import React from 'react';
import me from './../../images/me.png';

function FeedSearchBar() {

  let inputStyle = {
    height: '30px',
    width: '80%',
    border: '1px solid black',
    padding: '1em'
  }

  let divStyle = {
    backgroundColor: 'blue',
    padding: '1em',
    border: '1px solid black'
  }

  return (

    <div style={divStyle}>
    <div id="proimg">
    <img id="profileSearchImage" src={me}/>
    </div>
      <input style={inputStyle} type="text" placeholder="What's happening?"/>
    </div>

  );
}

export default FeedSearchBar;


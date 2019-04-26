import React from 'react';

function Navbar() {

  let searchbarStyles = {
    height: '30px',
    marginRight: '40px',
    paddingLeft: '15px',
    width: '200px'
  }

  let floatRight = {
    float: 'right'
  }

  let navBar = {
    padding: '.5em .25em .5em .25em',
    backgroundColor: 'blue',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .3)'
  }

  let borderRadius = {
    borderRadius: '5px 5px 5px 5px',
  }

  return (

    <div style={navBar}>
      <nav>
        <button>HOME</button>
        <button>NOTIFICATIONS</button>
        <button>MESSAGES</button>

        <div style={floatRight}>
          <input style={Object.assign({}, searchbarStyles, borderRadius)} type="text" placeholder="Search"/>
          <button style={Object.assign({}, borderRadius)}>TWEET</button>
        </div>

      </nav>
    </div>

  );
}

export default Navbar;
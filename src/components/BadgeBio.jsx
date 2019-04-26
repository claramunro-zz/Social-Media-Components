import React from 'react';

function BadgeBio(){
  
  let container = {
    marginTop: '2em',
    border: '1px solid black',
    width: '350px',
    color: 'white'
  }

  let text = {
    color: 'blue',
    padding: '0 20px 0 20px',
    backgroundcolor: 'yellow',
  }

  return(

    <div id="textFeed" style={container}>
      <p style={text}>Lorem ipsumt.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <p style={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit vitae recusandae mollitia omnis hic optio pariatur, ex laboriosam delectus amet molestias non iusto odit aliquam consectetur saepe iure! Sequi.</p>
    </div>

  );
}

export default BadgeBio;
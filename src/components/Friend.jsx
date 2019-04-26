import React from 'react';
import PropTypes from "prop-types";

function Friend(props) {

  let image = {
    width: '5em',
    height: '5em',
    marginRight: '1em',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
    objectFit: 'cover',
    marginLeft: '30px'
  }

  let columns = {
    display: 'grid',
    gridTemplateColumns: '(2, 1fr)',
    backgroundColor: 'red',
    marginLeft: '25px'

  }

  let floatright={
    float: 'right',
    marginRight: '25px'
  }

  let name = {
    marginLeft: '25px'
  }

  return (



<div>


<h3 style={name}>{props.text}</h3>

<div style={columns}></div>
<div>
<button style={floatright}>FOLLOW</button>
</div>

<div>
<img style={image} src={props.img} />
</div>

</div>


  );
}

Friend.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
};

export default Friend;
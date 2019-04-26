import React from 'react';
import PropTypes from 'prop-types';

function FeedPost(props) {
  
  let image = {
    width: '50px',
    height: '50px',
    marginTop: '15px',
    objectFit: 'cover',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
  }

  let border ={ 
    border: '1px solid blue',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    padding: '1em',
    margin: '1em 0 1em 0'

  }



  return (

    <div style={border}>
      <img style={image} src={props.img}/>
      <div id="textFeed">
        <p><strong>{props.name}</strong></p>
        <p>{props.text}</p>
      </div>
    </div>

  );
}

FeedPost.propTypes = {
  img: PropTypes.image,
  name: PropTypes.string,
  text: PropTypes.string
}

export default FeedPost;
import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(props) {

  let container = {
    width: '90%',
    backgroundColor: 'white'
  }

  console.log(props)

  return (
    <div style={container}>

      {props.postList.map((post, index) =>
      
        <Post 
        img={post.img}
          name={post.name}
          text={post.text}
          key={index}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  newList: PropTypes.array
};


export default PostList;
import React from 'react';
import me from './../../images/me.png';
import PropTypes from 'prop-types';


function NewPostForm(props) {
  let _img = me;
  let _name = "Clara Munro";
  let _text = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({text: _text.value, name: _name, img: _img});
    _text.value = '';
  }


  let inputStyle = {
    height: '30px',
    width: '80%',
    border: '1px solid black',

  }

  let divStyle = {
    backgroundColor: 'blue',
    width: '90%',
    border: '1px solid black'
  }

  return (

    <div style={divStyle}>
    
      <div id="proimg">
        <img id="profileSearchImage" src={me} />
        
      </div>

      <form onSubmit={handleNewPostFormSubmission}>
        <input 
        style={inputStyle} 
        type="text" 
        id="text"
        ref={(input) => {_text = input;}}
        placeholder="What's happening?" />
        <button type='submit'>SUBMIT</button>
      </form>

    </div>

  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;


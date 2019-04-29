import React from 'react';
import PropTypes from "prop-types";

import NewPostForm from './NewPostForm';
import PostList from './PostList';


class FeedPostControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          postsVisibleOnPage: false,
          masterPostList: []
        };
        this.handlePostSubmission = this.handlePostSubmission.bind(this);

      }
    


      handlePostSubmission(newPost){
        var newMasterPostList = this.state.masterPostList.slice();
        
        
        newMasterPostList.push(newPost);
        this.setState({masterPostList: newMasterPostList, postsVisibleOnPage: true
          
        });
        console.log(this.state.masterPostList);
      }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.postsVisibleOnPage){
      currentlyVisibleContent = <PostList postList = {this.state.masterPostList} onNewPostCreation={this.props.onNewPostCreation}/>;
    }

    return (
      <div>
        <NewPostForm onNewPostCreation={this.handlePostSubmission}/>
        {currentlyVisibleContent}
      </div>
    );
  }
}

FeedPostControl.propTypes = {
    onNewTweetCreation: PropTypes.func
  };

export default FeedPostControl;
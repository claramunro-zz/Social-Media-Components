import React from "react";
import Navbar from './Navbar';
import Badge from './Badge';
import BadgeBio from './BadgeBio';
import FriendList from './FriendList';
import FeedPostControl from "./FeedPostControl";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this)
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  
  render() { 
    return (
    <div>
        <style jsx global>{`

        * {
          font-family: monospace;
        }

        .columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 1em 0 0 0;
        }


        button {
          background-color: black;
          cursor: pointer;
          color: white;
          border-radius: 5px;
          margin: .5em;
          padding: 1em;
          backgroundColor: black;
          border: blue solid 1px;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
        }

        ::placeholder {
          color: grey;
        }

        #profile {
          width: 100px;
          marginTop: -90px;
          border-radius: 5px;
          border: blue solid 1px;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
          }

          #profileSearchImage {
            width: 40px;
            marginTop: -90px;
            border-radius: 5px;
            border: blue solid 1px;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
            object-fit: contain;     
          }

          #proimg {
            padding: 0 0 1em 0;
            
          }

          #textFeed {
            padding: 1em;
          }

          #postTitle {
            color: white;
            margin: '1em 0 1em 0',
            background-color: blue;

                                    
                                                             
          `}</style>            

      <Navbar/>                    
      <div className="columns">

        <div>
          <Badge/>
          <BadgeBio/>
        </div>

        <div>
          <FeedPostControl onNewPostCreation={this.handleAddingNewPostToList} newList={this.state.masterList}/>                                                               
        </div> 

        <div>
          <FriendList/>
        </div>

      </div>

    </div>
    );
  }
}

export default App;
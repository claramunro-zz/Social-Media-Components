import React from "react";
import Navbar from './Navbar';
import Badge from './Badge';
import BadgeBio from './BadgeBio';
import Feed from './Feed'
import FriendList from './FriendList';

function App() {

  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    padding: '1em 0 0 0'
  }

  return (
    <div>
        <style jsx global>{`

        * {
          font-family: monospace;
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

          }

          `}</style>

      <Navbar/>
      <div style={columns} >

        <div>
          <Badge/>
          <BadgeBio/>
        </div>

        <div>
          <Feed/>
        </div> 

        <div>
          <FriendList/>
        </div>

      </div>

    </div>
  );
}

export default App;
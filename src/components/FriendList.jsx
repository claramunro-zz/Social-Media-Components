import React from 'react';
import Friend from './Friend';

function FriendList(){

  let container = {
    border: '1px solid black',
    paddingBottom: '2em',
    color: 'black'
  }
  
  return(

    <div style={container}>
    
      <Friend
      img="http://giftechies.com/samar-real-estate/theme/img/user/1.jpg"
      text="Damniam Lillard"/>

      <Friend
      img="https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/03/harkless_knee_surgery.jpg"
      text="Moe Harkless"/>

      <Friend
      img="http://oregonsportsnews.com/wp-content/uploads/2018/09/Jusuf-Nurkic.jpg"
      text="Jusef Nurkic"/>

    </div>

  );
}

export default FriendList;
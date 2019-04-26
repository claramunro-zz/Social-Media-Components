import React from 'react';
import FeedSearchBar from './FeedSearchBar';
import FeedPost from './FeedPost';

function Feed() {

  let container = {
    width: '350px',
    backgroundColor: 'white'
  }

  return (
    <div style={container}>

      <FeedSearchBar/>

      <FeedPost
      img="http://oregonsportsnews.com/wp-content/uploads/2018/09/Jusuf-Nurkic.jpg"
      name="Jusef Nurkic"
      text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ame!"/>

      <FeedPost
      img="https://cdn.vox-cdn.com/thumbor/OKOXHbkHt50D98cLYnUosBafXow=/0x177:2768x4153/1200x800/filters:focal(1111x832:1553x1274)/cdn.vox-cdn.com/uploads/chorus_image/image/58170445/usa_today_10377865.0.jpg"
      name="Zach Collins"
      text="Lorem ipsum dolor sit amet, consectetur."/>

      <FeedPost
      img="https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2019/04/lillard_blazers_post_up.jpg"
      name="Damian Lillard"
      text="Lorem ipsum dolor."/>

      <FeedPost
      img="https://usatftw.files.wordpress.com/2018/06/cj-mccollum.jpg?w=1000&h=600&crop=1"
      name="CJ McCollum"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing"/>

      <FeedPost
      img="https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/03/harkless_knee_surgery.jpg"
      name="Moe Harkless"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>

    </div>

  );
}

export default Feed;
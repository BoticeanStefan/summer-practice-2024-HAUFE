// JavaScript source code
import React from 'react';
import ReactPlayer from 'react-player';
function myPlayer(){
    return (
      <ReactPlayer
            url="https://www.youtube.com/watch?v=9GgxinPwAGc"
            width="100%"
            height="100%"
            controls
        />
    );
}

export default myPlayer;
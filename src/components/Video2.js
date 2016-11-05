import React, { Component } from 'react';
import DriveIn from 'react-drive-in';
import ReactPlayer from 'react-player';

const PLAYLIST = [
                  "http://cdn.calm.com/scenes/scene-AI2PpDVaKc.mp4?v=1417688493900"
                ]


    export default class Video2 extends Component {
      constructor(props){
        super(props)
        this.state={playlist: PLAYLIST}
      }


      render() {
        return (
            <DriveIn
            show= {PLAYLIST}
            loop={true}
            />
        );
      }

    }

import React, { Component } from 'react';
import DriveIn from 'react-drive-in';
import ReactPlayer from 'react-player';

const PLAYLIST = [
                  "http://cdn.calm.com/scenes/scene-cfLUgx4Iku.mp4?v=1417688439976"
                ]

    export default class Video extends Component {

      constructor(props){
        super(props)
        this.state={playlist: PLAYLIST}
      }

      render() {
        return (
            <DriveIn
            id="#background-video"
            show={this.state.playlist}
            loop={true}
            />

        );
      }

    }

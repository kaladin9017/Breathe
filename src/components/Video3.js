import React, { Component } from 'react';
import DriveIn from 'react-drive-in';

const PLAYLIST = [
                  "http://cdn.calm.com/scenes/scene-7EIjhZ98C7.mp4?v=1417688565555"
                ]


    export default class Video3 extends Component {
      constructor(props){
        super(props)
        this.state={playlist: PLAYLIST}
      }


      render() {
        return (
          <DriveIn
          show={this.state.playlist}
          loop={true}
          />

        );
      }

    }

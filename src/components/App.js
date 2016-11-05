import React, { Component, PropTypes } from 'react';
import DriveIn from 'react-drive-in';
import ReactPlayer from 'react-player';
import { Link } from 'react-router';
import $ from 'jquery';

var imgStyle1 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-cfLUgx4Iku.jpg?v=1417688439976)"},
  imgStyle2 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-AI2PpDVaKc.jpg?v=1417688493900)"},
  imgStyle3 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-7EIjhZ98C7.jpg?v=1417688565555)"};

const sound = [
          ['http://cdn.calm.com/scenes/scene-cfLUgx4Iku.m4a?v=1417688439566'],
          ['http://cdn.calm.com/scenes/scene-AI2PpDVaKc.m4a?v=1417688493434'],
          ['http://cdn.calm.com/scenes/scene-7EIjhZ98C7.m4a?v=1417688565153']
      ];

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={current: null, content: null, title: null, animating: true}

  }
  fade () {
    // $("#main").animate({
    //     opacity: 1
    //   },1000, function () {
    //     setTimeout(function () {
    //       $("#main").animate({opacity:0})
    //     },2000)
    //   })

  }

  fadeIn () {
    // $("#main").animate({
    //     opacity: 1
    //   },1000, function() {
    //     setTimeout(function(){
    //     },3000)
    //   })
  }

  fadeOut () {
        // $("#main").animate({opacity:0},2000)
  }

  componentWillMount () {
    var that = this
    let temp = 0
    let path = this.props.location.pathname
    path == '/' ? temp = 0: path == '/deep' ? temp = 1 : temp = 2 ;
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        post.content = post.content.slice(3)
        post.content = post.content.slice(0, post.content.length-6)
        that.setState({content: post.content, title: post.title, current: temp})
      },
      cache: false
    });

  }

  selectVid (vidNum) {
    this.setState({current: vidNum});

  }

  render() {
    return (
      <div>
          <div id="main" onMouseEnter={this.fadeIn.bind(this)} onMouseLeave={this.fadeOut.bind(this)}>
            <div id="slide-picker" className="navbar navbar-default navbar-fixed-top">
              <Link to="/" className="sq">
                <div onClick={this.selectVid.bind(this, 0)}>
                  <div className="thumbnail img-responsive" style={imgStyle1}>
                  </div>
                </div>
              </Link>
              <Link to="deep" className="sq">
                <div onClick={this.selectVid.bind(this, 1)}>
                  <div className="thumbnail img-responsive" style={imgStyle2}>
                  </div>
                </div>
              </Link>
              <Link to="wave" className="sq">
                <div onClick={this.selectVid.bind(this, 2)}>
                  <div className="thumbnail img-responsive" style={imgStyle3}>
                  </div>
                </div>
              </Link>
            </div>
            <div className="poem navbar navbar-default navbar-fixed-bottom">
              <p className="author">
                {this.state.content}
                <br/>
                -{this.state.title}
              </p>
            </div>

            <ReactPlayer url={sound[this.state.current]}
            hidden={true}
            playing={true}
            loop={true}
            volume={1}
            />

          </div>

        {this.props.children}

    </div>
    );
  }
  componentDidMount () {
    this.fade()
  }
}

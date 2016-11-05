import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router';
import $ from 'jquery';
require('../styles/style.css');
// var imgStyle1 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-cfLUgx4Iku.jpg?v=1417688439976)"},
//   imgStyle2 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-AI2PpDVaKc.jpg?v=1417688493900)"},
//   imgStyle3 = {backgroundImage: "url(http://cdn.calm.com/images/scene-bg-7EIjhZ98C7.jpg?v=1417688565555)"};

const sound = [
          ['http://cdn.calm.com/scenes/scene-cfLUgx4Iku.m4a?v=1417688439566'],
          ['http://cdn.calm.com/scenes/scene-AI2PpDVaKc.m4a?v=1417688493434'],
          ['http://cdn.calm.com/scenes/scene-7EIjhZ98C7.m4a?v=1417688565153']
      ];

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={current: 0, content: null, title: null, animating: true}

  }
  fade () {
    $("#main").addClass("hidden");
    $("#wel").hide();

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
    path == '/wave' ? temp = 2: path == '/deep' ? temp = 1 : temp = 0 ;

  }

  selectVid (vidNum) {
    this.setState({current: vidNum});

  }

  render() {
    return (
      <div>
          <div id="main">
            <div id="slide-picker" className="navbar navbar-default navbar-fixed-top">
              <Link to="/">
                <div onClick={this.selectVid.bind(this, 0)}>
                  <div className="thumbnail img-responsive thumb1">
                  </div>
                </div>
              </Link>
              <Link to="deep">
                <div onClick={this.selectVid.bind(this, 1)}>
                  <div className="thumbnail img-responsive thumb2">
                  </div>
                </div>
              </Link>
              <Link to="wave">
                <div onClick={this.selectVid.bind(this, 2)}>
                  <div className="thumbnail img-responsive thumb3">
                  </div>
                </div>
              </Link>
            </div>

            <div className="welcome">
              <p id="wel">
                Welcome.
                A place to breathe and relax.
              </p>
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
    setTimeout(this.fade,4000);
    let that = this;
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        post.content = post.content.slice(3)
        post.content = post.content.slice(0, post.content.length-6)
        that.setState({content: post.content, title: post.title})
      },
      cache: false
    });
  }
}

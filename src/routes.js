import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Video from './components/Video';
import Video2 from './components/Video2';
import Video3 from './components/Video3';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Video} />
    <Route  path="deep" component={Video2}/>
    <Route path="wave" component={Video3} />
  </Route>
);

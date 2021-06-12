import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widget/Widget';

import FeedPage from './pages/FeedPage/FeedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />

      <Switch>
        <Route exact path='/' component={FeedPage} />
        <Route exact path='/profile' component={ProfilePage} />
      </Switch>

      <Widget />
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widget/Widget';
import Header from './components/Header/Header';

import FeedPage from './pages/FeedPage/FeedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />

      <div>
        <Header />

        <Switch>
          <Route exact path='/home' component={FeedPage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </div>

      <Widget />
    </div>
  );
};

export default App;

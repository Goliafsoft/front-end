import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, UsersPage, LoginPage } from '../container';

const SwitchPages = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/users" component={UsersPage} />
    <Route path="/login" component={LoginPage} />
    <Route component={() => <div>notfound</div>} />
  </Switch>
);

export default SwitchPages;

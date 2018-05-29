import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';


const Loading = () => <div>Loading...</div>;
const NotFound = () => <div>not found</div>;

const loadDynamicPage = name => Loadable({
  loader: () => import(`../page/${name}`),
  loading: Loading,
});

const SwitchPages = () => (
  <Switch>
    <Route exact path="/" component={loadDynamicPage('Home')} />
    <Route path="/users" component={loadDynamicPage('Users')} />
    <Route path="/login" component={loadDynamicPage('Login')} />
    <Route component={NotFound} />
  </Switch>
);

export default SwitchPages;

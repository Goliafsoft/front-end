import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router';

import NotFound from 'component/NotFound';
import Loading from 'component/Loading';
import connect from './connect';

import CustomRoute from './Route';

const loadDynamicPage = name => Loadable({
  loader: () => import(`../page/${name}`),
  loading: Loading,
});

const User = loadDynamicPage('User');
const Home = loadDynamicPage('Home');
const Users = loadDynamicPage('Users');
const Login = loadDynamicPage('Login');

const SwitchPages = ({ isAuthorise, location: { pathname } }) => {
  const isLogin = pathname === '/login';

  if (!isAuthorise && !isLogin) return <Redirect to="/login" />;
  if (isAuthorise && isLogin) return <Redirect to="/" />;

  return (
    <Switch>
      <CustomRoute exact path="/" Component={Home} />
      <CustomRoute path="/user/:id" Component={User} />
      <CustomRoute path="/user" Component={Users} />
      <CustomRoute path="/login" Component={Login} />
      <CustomRoute Component={NotFound} />
    </Switch>
  );
};

SwitchPages.propTypes = {
  isAuthorise: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(connect(SwitchPages));

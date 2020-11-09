// libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import AuthPage from './pages/AuthPage';
import LinksPage from './pages/LinksPage';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';

const routes = {
  authPage: '/',
  linksPage: '/links',
  createPage: '/create',
  detailsPage: '/details/:id',
};

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={routes.linksPage} exact component={LinksPage} />
        <Route path={routes.createPage} exact component={CreatePage} />
        <Route path={routes.detailsPage} component={DetailsPage} />
        <Redirect to={routes.createPage} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={routes.authPage} exact component={AuthPage} />
      <Redirect to={routes.authPage} />
    </Switch>
  );
};

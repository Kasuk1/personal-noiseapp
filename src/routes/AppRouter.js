import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <PublicRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

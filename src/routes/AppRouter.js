import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { Navbar } from '../components/layout/Navbar/Navbar';

import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/'>
          <PublicRoutes />
        </Route>
      </Switch>
      <Alert />
    </BrowserRouter>
  );
};

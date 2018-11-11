import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import Issues from './routes/Issues';
import Material from './routes/Material';
import Events from './routes/Events';
import Settings from './routes/Settings';

const Layout = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/issues" component={Issues} />
      <Route path="/material" component={Material} />
      <Route path="/events" component={Events} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default Layout;

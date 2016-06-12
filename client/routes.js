import React from 'react';
import { Route } from 'react-router';

import MainLayout from './components/mainLayout';
import HomePage from './components/pages/home';
import CssToJSON from './components/pages/csstojson';
import URLEncoder from './components/pages/urlencoder';

export default (
  <Route>
    <Route component={MainLayout}>
      <Route path="/" component={HomePage} />
      <Route path="/csstojson" component={CssToJSON} />
      <Route path="/urlencoder" component={URLEncoder} />
    </Route>
  </Route>
);

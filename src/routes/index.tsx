import React from 'react';
import { Routes as RDRoutes, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Repository from 'pages/Repository';

function Routes(): JSX.Element {
  return (
    <RDRoutes>
      <Route index element={<Dashboard />} />
      <Route path="repositories/:user/:repository" element={<Repository />} />
    </RDRoutes>
  );
}

export default Routes;

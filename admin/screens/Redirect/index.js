import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import pluginId from '../../helpers/pluginId';
import usePermissions from '../../hooks/usePermissions';

import OverviewPage from './OverviewPage';
import DetailPage from './DetailPage';

const App = () => {
  const { canRead, loading } = usePermissions();

  if (loading) return null;

  if (!canRead) return <Redirect to="/" />;

  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={OverviewPage} exact />
        <Route path={`/plugins/${pluginId}/new`} component={DetailPage} exact />
        <Route path={`/plugins/${pluginId}/:id`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
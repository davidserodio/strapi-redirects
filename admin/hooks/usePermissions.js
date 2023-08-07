import { useRBAC } from '@strapi/helper-plugin';
import pluginId from '../helpers/pluginId';

const perms = { read: [{ action: `plugin::${pluginId}.read`, subject: null }] };

function usePermissions() {
  const { allowedActions, isLoading: loading } = useRBAC(perms);
  return { ...allowedActions, loading };
}

export default usePermissions;

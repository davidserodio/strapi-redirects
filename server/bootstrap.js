import { Strapi } from "@strapi/strapi";
import pluginId from './util/pluginId';

export default async ({ strapi }) => {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Access redirects menu',
      uid: 'read',
      pluginName: pluginId,
    }
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
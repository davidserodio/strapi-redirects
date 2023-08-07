const pluginId = require('./util/pluginId');

module.exports = {
  default: async ({ strapi }) => {
    const actions = [
      {
        section: 'plugins',
        displayName: 'Access redirects menu',
        uid: 'read',
        pluginName: pluginId,
      }
    ];

    await strapi.admin.services.permission.actionProvider.registerMany(actions);
  }
}

const pluginId = require('./util/pluginId');

module.exports = async ({ strapi }) => {
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


'use strict';

const config = require('./util/config');

// Admin API
const adminApiRedirectSchema = require('./admin-api/content-types/schema');
const adminApiRedirectRoutes = require('./admin-api/routes/redirect');
const adminApiRedirectController = require('./admin-api/controllers/redirect');
const adminApiRedirectService = require('./admin-api/services/redirect');

// Content API
const contentApiContentTypeRoutes = require('./content-api/routes/content-api');
const contentApiContentTypeController = require('./content-api/controllers/content-type');
const contentApiContentTypeService = require('./content-api/services/content-type');

// Bootstrap
const bootstrap = require('./bootstrap');

module.exports = {
  bootstrap,
  config,
  contentTypes: {
    redirect: {
      schema: adminApiRedirectSchema,
    }
  },
  routes: {
    admin: {
      type: 'admin',
      routes: [
        ...adminApiRedirectRoutes,
      ],
    },
    "content-api": {
      type: "content-api",
      routes: [
        ...contentApiContentTypeRoutes,
      ],
    },
  },
  controllers: {
    redirect: adminApiRedirectController,
    'content-type': contentApiContentTypeController,
  },
  services: {
    redirect: adminApiRedirectService,
    'content-type': contentApiContentTypeService,
  },
};
'use strict';

/**
 * popup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popup.popup');

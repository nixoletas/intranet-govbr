'use strict';

/**
 * noticia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::noticia.noticia');

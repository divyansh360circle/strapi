module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  port: process.env.PORT || 1337,
  url: 'http://strapi.qafto.in',
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

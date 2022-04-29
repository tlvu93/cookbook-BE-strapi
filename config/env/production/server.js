module.exports = ({ env }) => ({
  proxy: true,
  url: env("DATABASE_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

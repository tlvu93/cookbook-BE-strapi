module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://wbs-cookbook-backend.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

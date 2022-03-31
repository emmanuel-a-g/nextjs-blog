//DEV or BUILD??
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "milito",
        mongodb_password: "PjteHLGHndZGcTcf",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  //I can use different values
  return {
    env: {
      mongodb_username: "milito",
      mongodb_password: "PjteHLGHndZGcTcf",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-site",
    },
  };
  //variables go here that will be used later
};

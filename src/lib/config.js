require("dotenv").config();

module.exports = {
  API: {
    BASE_URL: process.env.API_BASE_URL || "http://localhost:8090",
    PATHS: {
      SESSION: "/session",
      AUTHORIZATION: "/authorization",
      ABORT: "/abort",
      SAVE_BAVDATA: "/verify-account",
      GET_NAME_INFO: "/person-info",
      GET_NAME_INFO_DECRYPT_KEY: "person-info-key",
    },
  },
  APP: {
    BASE_URL: process.env.EXTERNAL_WEBSITE_HOST || "http://localhost:8000",
    PATHS: {
      BAV: "/",
      NAME_INFO: "/name-info",
      LANDING_PAGE: "/continue-enter-bank-account-details",
      ACCOUNT_DETAILS: "/enter-account-details",
      CHECK_DETAILS: "/check-details",
      ABORT: "/abort",
      CANNOT_PROCEED: "/cannot-proceed",
      COULD_NOT_MATCH: "/could-not-match",
      DONE: "/done",
      ERROR: "/error",
      OAUTH2: "/oauth2/callback",
    },
    ANALYTICS: {
      DOMAIN: process.env.ANALYTICS_DOMAIN || "localhost",
    },
  },
  PORT: process.env.PORT || 5040,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SESSION_TABLE_NAME: process.env.SESSION_TABLE_NAME,
  SESSION_TTL: process.env.SESSION_TTL || 7200000, // two hours in ms
  REDIS: {
    SESSION_URL: process.env.REDIS_SESSION_URL,
    PORT: process.env.REDIS_PORT || 6379,
  },
};

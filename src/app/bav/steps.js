const root = require("./controllers/root");
const landingPage = require("./controllers/landingPage");
const escapeJourney = require("./controllers/escapeJourney");
const confirmDetails = require("./controllers/confirmDetails");
const { APP } = require("../../lib/config");

module.exports = {
  [`${APP.PATHS.BAV}`]: {
    resetJourney: true,
    reset: true,
    entryPoint: true,
    skip: true,
    controller: root,
    next: APP.PATHS.LANDING_PAGE,
  },
  [`${APP.PATHS.LANDING_PAGE}`]: {
    controller: landingPage,
    next: APP.PATHS.ACCOUNT_DETAILS,
  },
  [`${APP.PATHS.ACCOUNT_DETAILS}`]: {
    fields: ["sortCode", "accountNumber"],
    editable: true,
    editBackStep: APP.PATHS.CONFIRM_DETAILS,
    next: APP.PATHS.CONFIRM_DETAILS,
  },
  [`${APP.PATHS.CONFIRM_DETAILS}`]: {
    controller: confirmDetails,
    next: APP.PATHS.DONE,
  },
  [`${APP.PATHS.CANNOT_PROCEED}`]: {
    controller: escapeJourney,
    fields: ["escapeChoice"],
    checkJourney: false,
    next: [
      {
        field: "escapeChoice",
        value: "proveAnotherWay",
        next: APP.PATHS.ABORT
      },
      {
        field: "escapeChoice",
        value: "goBack",
        next: [
          {
            field: "isLanding",
            value: true,
            next: APP.PATHS.LANDING_PAGE
          },
          {
            field: "isLanding",
            value: false,
            next: APP.PATHS.CONFIRM_DETAILS
          }
    ]
      }
    ]
  }
};

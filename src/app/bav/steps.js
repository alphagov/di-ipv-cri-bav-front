const root = require("./controllers/root");
const landingPage = require("./controllers/landingPage");
const howContinueBank = require("./controllers/howContinueBank");
const checkDetails = require("./controllers/checkDetails");
const abort = require("./controllers/abort");
const nameInfo = require("./controllers/nameInfo");
const { APP } = require("../../lib/config");

module.exports = {
  [`${APP.PATHS.BAV}`]: {
    resetJourney: true,
    reset: true,
    entryPoint: true,
    skip: true,
    controller: root,
    next: APP.PATHS.NAME_INFO,
  },
  [APP.PATHS.NAME_INFO]: {
    entryPoint: true,
    skip: true,
    controller: nameInfo,
    next: APP.PATHS.LANDING_PAGE,
  },
  [APP.PATHS.LANDING_PAGE]: {
    controller: landingPage,
    next: APP.PATHS.ACCOUNT_DETAILS,
  },
  [APP.PATHS.ACCOUNT_DETAILS]: {
    fields: ["sortCode", "accountNumber"],
    editable: true,
    editBackStep: APP.PATHS.CHECK_DETAILS,
    next: APP.PATHS.CHECK_DETAILS,
  },
  [APP.PATHS.CHECK_DETAILS]: {
    controller: checkDetails,
    fields: ["retryCount"],
    next: [
      {
        field: "retryCount",
        value: undefined,
        next: APP.PATHS.DONE,
      },
      {
        field: "retryCount",
        value: 1,
        next: APP.PATHS.COULD_NOT_MATCH,
      },
    ],
  },
  [APP.PATHS.HOW_CONTINUE_BANK]: {
    controller: howContinueBank,
    fields: ["howContinueBankChoice"],
    checkJourney: false,
    next: [
      {
        field: "howContinueBankChoice",
        value: "proveAnotherWay",
        next: APP.PATHS.ABORT,
      },
      {
        field: "howContinueBankChoice",
        value: "goBack",
        next: [
          {
            field: "isLanding",
            value: true,
            next: APP.PATHS.LANDING_PAGE,
          },
          {
            field: "isLanding",
            value: false,
            next: APP.PATHS.CHECK_DETAILS,
          },
        ],
      },
    ],
  },
  [`${APP.PATHS.COULD_NOT_MATCH}`]: {
    fields: ["couldNotMatchChoice"],
    checkJourney: false,
    next: [
      {
        field: "couldNotMatchChoice",
        value: "tryAgain",
        next: APP.PATHS.CHECK_DETAILS,
      },
      {
        field: "couldNotMatchChoice",
        value: "proveAnotherWay",
        next: APP.PATHS.ABORT,
      },
    ],
  },
  [`${APP.PATHS.DONE}`]: {
    skip: true,
    noPost: true,
    next: APP.PATHS.OAUTH2,
  },
  [`${APP.PATHS.ABORT}`]: {
    entryPoint: true,
    skip: true,
    controller: abort,
  },
  [APP.PATHS.DONE]: {
    skip: true,
    noPost: true,
    next: APP.PATHS.OAUTH2,
  },
  [APP.PATHS.ERROR]: {
    entryPoint: true,
  },
};

module.exports = {
  sortCode: {
    type: "text",
    journeyKey: "sortCode",
    validate: [
      "required",
      {
        type: "allowedChars",
        fn: (value) =>
          value.match(/^[0-9\-\s]+$/),
      },
      { type: "minlength", arguments: [6] },
      {
        type: "spaceOrDashLength",
        fn: (value) =>
          !value.match(/^\d{1}-\d{2}-\d{2}$|^\d{2}-\d{1}-\d{2}$|^\d{2}-\d{2}-\d{1}$|^\d{1} \d{2} \d{2}$|^\d{2} \d{1} \d{2}$|^\d{2} \d{2} \d{1}$/),
      },
      {
        type: "regexNumber",
        fn: (value) =>
          value.match(/^\d{6}$|^\d{2}-\d{2}-\d{2}$|^\d{2} \d{2} \d{2}$/),
      },
    ],
  },
  accountNumber: {
    type: "text",
    journeyKey: "accountNumber",
    validate: [
      "required",
      {
        type: "numsOnly",
        fn: (value) =>
          value.match(/^[0-9]+$/),
      },
      { type: "minlength", arguments: [6] },
      { type: "maxlength", arguments: [8] },
    ],
  },
  howContinueBankChoice: {
    type: "radios",
    legend: "",
    label: "",
    hint: "",
    items: [
      {
        value: "proveAnotherWay",
        conditional: {
          html: "",
        },
      },
      {
        value: "goBack",
        conditional: {
          html: "",
        },
      },
    ],
    validate: ["required"],
  },
  couldNotMatchChoice: {
    type: "radios",
    legend: "",
    label: "",
    hint: "",
    items: [
      {
        value: "tryAgain",
        conditional: {
          html: "",
        },
      },
      {
        value: "proveAnotherWay",
        conditional: {
          html: "",
        },
      },
    ],
    validate: ["required"],
  },
};

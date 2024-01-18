function formatSortCode(sortCode) {
  const splitSortCode = sortCode
    .split("")
    .filter((char) => char != " " && char != "-");
  splitSortCode.splice(2, 0, "-");
  splitSortCode.splice(5, 0, "-");
  const displaySortCode = splitSortCode.join("");
  return displaySortCode;
}

function formatSortCodeForSubmission(sortCode) {
  return sortCode.replace(/[ -]/g, "");
}

module.exports = { formatSortCode, formatSortCodeForSubmission };

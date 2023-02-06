const index = require("./index.json");
const english = require("./english.json");
const french = require("./french.json");
const tibetan = require("./tibetan.json");
const calls = require("./calls.json");

module.exports = {
  ...index,
  tableData: {
    english,
    french,
    tibetan,
  },
  calls,
};

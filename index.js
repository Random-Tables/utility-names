const index = require("./index.json");
const english = require("./english.json");
const french = require("./french.json");
const tibetan = require("./tibetan.json");

module.exports = {
  ...index,
  tableData: {
    english,
    french,
    tibetan,
  },
};

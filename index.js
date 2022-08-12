const index = require("./index.json");
const english = require("./english.json");
const french = require("./french.json");
const tibetan = require("./tibetan.json");

exports.index = {
  ...index,
  tableData: {
    english,
    french,
    tibetan,
  },
};

const index = require("./index.json");
const english = require("./english.json");
// import english from "english.json";

exports.index = {
  ...index,
  tableData: {
    english,
  },
};

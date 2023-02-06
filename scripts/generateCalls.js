const fs = require("fs");
const path = require("path");
const indexData = require("../index.json");

const CALLS_PATH = path.resolve(__dirname, '../calls.json');

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const calls = {};
Object.keys(indexData.tables).forEach((tableGroup) => {
    indexData.tables[tableGroup].forEach((table) => {
    const objectKey = camelize(tableGroup) + capitalize(camelize(table));
    calls[objectKey] = `${indexData.collectionID}/${tableGroup}/${table}`;
  });
});

fs.writeFile(CALLS_PATH, JSON.stringify(calls), function (err) {
  if (err) throw err;
});

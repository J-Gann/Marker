const fs = require("fs");
const path = require("path");

const mockingFolder = path.resolve("mocking");
const mockingImagesFolder = path.resolve(mockingFolder, "images");
const mockingMarkersFile = path.resolve(mockingFolder, "markers.json");

const imageTitles = fs.readdirSync(mockingImagesFolder);

let marker = {};

imageTitles.forEach((title) => {
  marker[title] = {
    a: { x: 100, y: 100 },
    b: { x: 200, y: 200 },
    c: { x: 300, y: 300 },
  };
});

const string = JSON.stringify(marker);

fs.writeFileSync(mockingMarkersFile, string);

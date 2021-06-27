const path = require("path");
const fs = require("fs-extra");

const destDir = path.join("./", "docs");
const srcDir = path.join("./", "build");

fs.copySync(srcDir, destDir, { overwrite: true });

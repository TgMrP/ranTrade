
const path = require("path");
const dotenv = require("dotenv");

const name = "NewTradeMobile";

const ENV = dotenv.config({ path: "./.env" }).parsed;

module.exports = {
  apps: [
    {
      name: `${name}-all`,
      cwd: path.resolve(__dirname),
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
        ...ENV,
      },
    },
  ],
};

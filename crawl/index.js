const cron = require("node-cron");
let shell = require("shelljs")
require("dotenv").config();
cron.schedule("* * * * *", () => {// run every day at 6am
    console.log("Scheduler running ...");
    console.log("Running nhandan.js")
    shell.exec("node ./src/nhandan.js")
    console.log("Running vietnamnet.js")
    shell.exec("node ./src/vietnamnet.js")
    console.log("running express")
    shell.exec("node ./src/vnexpress.js")
    console.log("run hide article")
    shell.exec("node ./src/hideArticle.js")
})
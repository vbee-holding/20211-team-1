const cron = require("node-cron");
let shell = require("shelljs")

cron.schedule("0 6 * * *", () => {// run every day at 6am
    console.log("Scheduler running ...");
    console.log("Running nhandan.js")
    shell.exec("node nhandan.js")
    console.log("Running vietnamnet.js")
    shell.exec("node vietnamnet.js")
    console.log("running express")
    shell.exec("node vnexpress.js")
    console.log("run hide article")
    shell.exec("node hideArticle.js")
})
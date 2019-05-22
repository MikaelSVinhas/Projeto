'use strict'

const wait_sec = 1000;
const { BeforeAll, After, Status } = require("cucumber");

BeforeAll({ timeout: 60 * wait_sec }, async function () {
    console.log("\nIniciando testes ....")
});

// After(async function (scenario) {
//     let world = this;
//     if (scenario.result.status === Status.FAILED) {
//         return await browser.takeScreenshot().then(function (buffer) {
//             return world.attach(buffer, "image/png");
//         });
//     }

/*After(async function (scenario) {
    let world = this;
    {
    browser.manage().deleteAllCookies()
    return await browser.takeScreenshot().then(function (buffer) {
    return world.attach(buffer, "image/png");
    });
    }
});*/

After(function(scenario) {
    //if (scenario.result.status === Status.FAILED) {
      const attach = this.attach; // cucumber's world object has attach function which should be used
      browser.manage().deleteAllCookies()
      return browser.takeScreenshot().then(function(png) {
        const decodedImage = new Buffer(png, "base64");
        return attach(decodedImage, "image/png");
      });
    //}
});
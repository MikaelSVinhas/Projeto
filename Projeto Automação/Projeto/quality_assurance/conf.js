const jsonReports = process.cwd() + "C:/Relatórios/json";
const Reporter = require("/Projeto Automação/Projeto/quality_assurance/support/reporter");       
                          

'use strict'
const Data = require('./environments_parameters.json');
const TEST_ENV = process.env.TEST_ENV || 'local'
let environmentParameters

switch (TEST_ENV) {
  case 'local':
    environmentParameters = Data[0].local
    break
}

exports.config = {
  seleniumAddress: environmentParameters.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 500000,
  allScriptsTimeout: 300000,
  rootElement: 'body',
  baseUrl: environmentParameters.baseUrl,
  params: {

  },
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome",
    
    chromeOptions: {
      args: [
        //"headless",
        "--disable-gpu",
        "--window-size=1280,1024",
        "--Buffer.allocUnsafe()"    
      ]
    }
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: [
    //adicionar caminho dos arquivos cucumber ex.: 'features/archive_features/teste/*.feature'
    'features/archive_features/exemplo/*feature',
    
   
 ],
  resultJsonOutputFile: "C:/Relatórios/json/protractor_report.json",
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    //require('babel-register');
  },

  cucumberOpts: {
    strict: true,
    format: 'json:results.json',
    //caminho dos arquivos js ex.: require: '../features/step_definitions/teste/*.js'
    require: '../features/step_definitions/exemplo/*.js',
  
    tags: [''], // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};
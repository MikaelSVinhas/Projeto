const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const reporter = require("cucumber-html-reporter");
const report = require("cucumber-html-report");
const htmlReports = process.cwd() + "../../../../Relatórios/html";
const targetJson = process.cwd() + "/results.json";
//const targetJson = process.cwd() + "/reports/json/cucumber_report.json";
var now = new Date
var ano = now.getFullYear()
var dia = now.getDate()
var mes = now.getMonth() + 1
var hora = now.getHours()
var min = now.getMinutes()

const cucumberReportOptions = {
  source: targetJson,
  dest: '../../../../Relatórios/html',
  name: 'Relatorio' + dia + '-' + mes + '-' + ano + '_' + hora + '-' + min + '.html',
  title: "Report",
  //ignoreUncaughtExceptions: false,
  //untrackOutstandingTimeouts: false,
  storeScreenshots: true,
  screenshotsDirectory: 'C:/Relatórios/Screenshots/Img_' + dia + '-' + mes + '-' + ano,
};
const cucumberReporteroptions = {
  theme: "bootstrap",
  name: "Relatório de Testes",
  brandTitle: "Projeto Pessoal",
  launchReport: true,
  columnLayout: 1,
  //['bootstrap', 'hierarchy', 'foundation', 'simple']
  jsonFile: targetJson,
  output: '../../../../Relatorios/html/Relatorio' + dia + '-' + mes + '-' + ano + '_' + hora + '-' + min + '.html',
  //reportSuiteAsScenarios: true,
  storeScreenshots: false,
  screenshotsDirectory: 'C:/Relatorios/Screenshots/Img_' + dia + '-' + mes + '-' + ano,
};

class Reporter {

  static createDirectory(dirName) {
    //Check if the directory exist
    if (!fs.existsSync(dirName)) {
      mkdirp.sync(dirName);
    }
    }

  static createHTMLReport() {

    try {
      reporter.generate(cucumberReporteroptions); 
      //invoke cucumber-html-reporter

      report
        .create(cucumberReportOptions)
        .then(function() {
          //invoke cucumber-html-report
          // creating two reports(optional) here, cucumber-html-report gives directory already exists as cucumber-html-reporter already creates the html dir!
          // suggestion- use either one of the reports based on your needs
          console.log('Relatorio' + dia + '-' + mes + '-' + ano + '_' + hora + '-' + min + '.html gerado com sucesso!');
        })
        .catch(function(err) {
          if (err) {
            console.error(err);
          }
        });
    } catch (err) {
      if (err) {
        console.log("Falha ao salvar os resultados do teste do cucumber no arquivo json");
        console.log(err);
      }
    }
  }

  /**
   * Allure reports method, would work only with cucumber 1.3.x & less versions
   * Currently incompatible with latest cucumber 3.x version
   */

  static createAllureXML() {
    const allureReporter = require("cucumberjs-allure-reporter");
    const xmlReports = process.cwd() + "/reports/xml";
    Reporter.createDirectory(xmlReports);
    allureReporter.config({
      targetDir: xmlReports
    })
  }
}
module.exports = Reporter;
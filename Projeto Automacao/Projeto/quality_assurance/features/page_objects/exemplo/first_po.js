'use strict'

const Helper = require('../../shared_libs/helper.js')

class first {
  constructor() {
    this.helper = new Helper()
    //this.exemplo = element(by.css('element'))
  }

  open(link) {
    return browser.get(link)
  }

}

module.exports = first
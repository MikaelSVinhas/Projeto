'use strict'

const { element } = require('protractor')
const Helper = require('../../shared_libs/helper.js')

class pesquisa {
  constructor() {
    this.helper = new Helper()
    //this.exemplo = element(by.css('element'))
    this.btnComprarPassagem = element(by.css('a[class="btn-buy-passage btn-purchase-header"]'))
    this.btnIda = element(by.css('div[class="box-numbers calendar-go"]'))
    this.opcaoDia = element(by.cssContainingText('a','24'))
    this.opcaoSomenteIda = element(by.id('goOrBack'))
    this.btnAddAdultos = element(by.css('div.box-numbers.adults > div.numbers-addRemove > a.numbers-add'))
    this.btnCompreAqui = element(by.id('btn-box-buy'))
  }

    
}

module.exports = pesquisa
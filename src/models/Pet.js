let BaseModel = require('../mysql/sequelize.js')
const Sequelize = require('sequelize')

let _attrs = {         // 特有属性
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10)
}

class Pets extends BaseModel {
  constructor (attrs = _attrs) {
    super(attrs)
    super.name = 'pet'
  }
}

let pets = new Pets()
let Pet = pets.createModel()

module.exports = Pet

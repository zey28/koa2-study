/**
 * Created by zhuwei on 2017/5/11.
 */
const Sequelize = require('sequelize')
const config = require('../mysql/config')
var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})
// 所有表的基类，共用列属性
class BaseModel {
  constructor (attrs) {
    let commonColumn = {
      id: {
        type: Sequelize.INTEGER,
        // field: 'id',
        primaryKey: true
        // unique: true,
        // autoIncrement: true
      },
      createdAt: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      // 这两个属性都可以通过sequelize自己的属性设定，这里是指举例说明共有属性可以这么用
      version: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    }
    this.allColumn = {}
    Object.assign(this.allColumn, commonColumn, attrs)
  }

  createModel () {
    return sequelize.define(this.name, this.allColumn, { // 第三个参数用来配置
      timestamps: false,
      hooks: {
        beforeValidate: function (obj) {
          let now = Date.now()
          obj.createdAt = now
          obj.updatedAt = now
          obj.version = 0
        }

      }
    })
  }

}

module.exports = BaseModel

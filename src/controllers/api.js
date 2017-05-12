let Models = require('../models')

let Get = async (ctx, next) => {
  // 一些默认列属性不用再填写。
  Models.Pet.create({
    // id: 'g-',
    name: 'xiaoming',
    gender: false,
    birth: '2007-07-07'
    // createdAt: now,
    // updatedAt: now,
    // version: 0
  }).then(function (p) {
    console.log('created.' + JSON.stringify(p))
    console.log('插入数据成功')
  }).catch(function (err) {
    console.log('failed: ' + err)
    console.log('失败')
  })
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query
  }
  await next()
}

async function Post (ctx) {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}








module.exports = { Get, Post, Put, Delect }

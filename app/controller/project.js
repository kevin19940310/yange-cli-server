'use strict';

const Controller = require('egg').Controller;
const momgo = require('../utils/mongo');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data = await momgo().query('template');
    ctx.body = data;
  }
}

module.exports = ProjectController;

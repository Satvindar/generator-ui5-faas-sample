'use strict';
const Generator = require('yeoman-generator');
const InputValidator= require('./InputValidator')

const chalk = require('chalk');
const yosay = require('yosay');
const FAAS_TPL_NAME = "faasTemplate";

module.exports = class extends Generator {
  
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Hello ${chalk.blue.bold('Satvindar')},you're awesome. Welcome to the astounding ${chalk.red('generator-ui-5-faastest')} generator!`)
    );

    this.answers = await this.prompt([
      {
        type:"input",
        name:"projectName",
        message:"Enter a project name",
        validate: InputValidator.validateProjectName,
        default: this.appname
      },
      {
        type:"input",
        name:"functionName",
        message:"Enter a function name",
        validate: InputValidator.validateFunctionName,
        default: "function"
      },
      {
        type:"input",
        name:"triggerName",
        message:"Enter a trigger name",
        validate: InputValidator.validateTriggerName,
        default:"trigger"
      },
      {
        type:'list',
        name:'triggerType',
        message:'Select a trigger type',choices:[
          "HTTP",
          "Timer",
          "AMQP"
        ],
        default:"HTTP"
      }
    ])

  }

  writing() {
    this.fs.copy(
      this.templatePath(FAAS_TPL_NAME),
      this.destinationPath(this.answers.projectName),
      {
        projectName: this.answers.projectName,
        runtime: "nodejs8",
        functionName: this.answers.functionName,
        triggerName: this.answers.triggerName,
        triggerType: this.answers.triggerType
      }
    );
  }
};



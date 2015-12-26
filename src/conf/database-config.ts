/// <reference path="../../typings/node/node.d.ts" />

var secretsFile = "../../secret-config.json";
var config;
try {
  config = require(secretsFile)
}
catch (err) {
  config = {}
  console.log("unable to read file '" + secretsFile + "': ", err)
  console.log("see secret-config-sample.json for an example")
}

export interface IConfig {
    host?: string;
    user: string;
    password: string;
    database: string;
    options?: Object
}

export class Config implements IConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    options: Object;

    constructor() {
        this.database = config.mysql.database, 
        this.user = config.mysql.user, 
        this.password = config.mysql.password, 
        this.options = {
            dialect: "mysql",
            host: config.mysql.host,
            port: 3306,
            define: {
                freezeTableName: true
            }
        }
    }

}
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

export interface databaseConfig {
    host?: string;
    user: string;
    password: string;
    database: string;
    options?: Object
}

export interface analyticsConfig {
    key: string;
}

export class dbConfig implements databaseConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    options: Object;

    constructor() {
        this.host = config.mysql.host,
        this.database = config.mysql.database, 
        this.user = config.mysql.user, 
        this.password = config.mysql.password, 
        this.options = {
            dialect: "mysql",
            port: 3306,
            define: {
                freezeTableName: true
            }
        }
    }

}

export class gaConfig implements analyticsConfig {
    key: string;

    constructor() {
        this.key = config.analytics.ga
    }

}
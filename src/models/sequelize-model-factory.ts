////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="../../typings/sequelize/sequelize.d.ts" />

import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');


export class Models {

    public SEQUELIZE:sequelize.Sequelize;

    public line:types.lineModel;


    constructor(database:string, username:string, password:string, options:sequelize.Options) {

        this.SEQUELIZE = new Sequelize(database, username, password, options);
        var self:Models = this;

        this.line = <types.lineModel> this.SEQUELIZE.define<types.lineInstance, types.linePojo>('line', {
                'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
                'scene': Sequelize.STRING,
                'actor': Sequelize.STRING,
                'line': Sequelize.STRING,
                'date_created': Sequelize.DATE,
                'date_updated': Sequelize.DATE
            },
            {
                timestamps: false,
                classMethods: {
                    getline: (line:any) => {
                        var where:{[key:string]:any} = {};
                        var id:number = parseInt(line);
                        if (isNaN(id)) {
                            if (line['id'] !== undefined) { where['id'] = line['id']}
                            if (line['scene'] !== undefined) { where['scene'] = line['scene']}
                            if (line['actor'] !== undefined) { where['actor'] = line['actor']}
                            if (line['line'] !== undefined) { where['line'] = line['line']}
                            if (line['date_created'] !== undefined) { where['date_created'] = line['date_created']}
                            if (line['date_updated'] !== undefined) { where['date_updated'] = line['date_updated']}
                        } else {
                            where['id'] = id;
                        }
                        return self.line.find({where: where});
                    }
                }
            });
            }

}

interface ModelCache {
    models:Models;
    lastRetrieved:Date;
}

var modelsCache:{[key:string]: ModelCache} = {};

export function forDatabase(database:string, username?:string, password?:string, options?:sequelize.Options):Models {

    var cache:ModelCache = modelsCache[database];
    if (cache !== undefined) {
        cache.lastRetrieved = new Date();
        return cache.models;
    }

    if (typeof username !== 'string' || username.length === 0 ||
        typeof password !== 'string' || password.length === 0) {

        throw new Error('Cannot get models for database "' + database + '" since username and/or password were not ' +
            'provided and the database is not yet cached. forDatabase() must be called first with authentication ' +
            'data before it can be called with only the database name.');
    }

    cache = {
        models: new Models(database, username, password, options),
        lastRetrieved: new Date()
    };

    modelsCache[database] = cache;

    return cache.models;
}

export function clearAll():void {
    modelsCache = {};
}

export function clearDatabase(database:string):void {
    delete modelsCache[database];
}

export function clearNotUsedSince(date:Date):void {
    var time:number = date.getTime();

    var allKeys:string[] = Object.keys(modelsCache);
    var clearKeys:string[] = allKeys.filter(key => modelsCache[key].lastRetrieved.getTime() < time);

    if (clearKeys.length === 0) {
        return;
    }

    if (clearKeys.length === allKeys.length) {
        clearAll();
        return;
    }

    clearKeys.forEach(key => clearDatabase(key));
}

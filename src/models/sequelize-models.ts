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

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var line:types.lineModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    line = <types.lineModel> SEQUELIZE.define<types.lineInstance, types.linePojo>('line', {
        'id':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'scene':Sequelize.STRING,
        'actor':Sequelize.STRING,
        'line':Sequelize.STRING,
        'date_created':Sequelize.DATE,
        'date_updated':Sequelize.DATE
        },
        {
            timestamps: false,
            classMethods: {
                getline:(line:any) => {
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
                        where['!!cannotFindIdFieldOnline!!'] = id;
                    }
                    return line.find({where: where});
                }
            }
        });
    
    return exports;
}


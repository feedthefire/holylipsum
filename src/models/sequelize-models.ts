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
export var scene:types.sceneModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    line = <types.lineModel> SEQUELIZE.define<types.lineInstance, types.linePojo>('line', {
        'id':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'scene_id':Sequelize.INTEGER,
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
                        if (line['scene_id'] !== undefined) { where['scene_id'] = line['scene_id']}
                        if (line['actor'] !== undefined) { where['actor'] = line['actor']}
                        if (line['line'] !== undefined) { where['line'] = line['line']}
                        if (line['date_created'] !== undefined) { where['date_created'] = line['date_created']}
                        if (line['date_updated'] !== undefined) { where['date_updated'] = line['date_updated']}
                    } else {
                        where['id'] = id;
                    }
                    return line.find({where: where});
                }
            }
        });
    
    scene = <types.sceneModel> SEQUELIZE.define<types.sceneInstance, types.scenePojo>('scene', {
        'id':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'scene':Sequelize.STRING,
        'description':Sequelize.STRING,
        'line_count':Sequelize.INTEGER
        },
        {
            timestamps: false,
            classMethods: {
                getscene:(scene:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(scene);
                    if (isNaN(id)) {
                        if (scene['id'] !== undefined) { where['id'] = scene['id']}
                        if (scene['scene'] !== undefined) { where['scene'] = scene['scene']}
                        if (scene['description'] !== undefined) { where['description'] = scene['description']}
                        if (scene['line_count'] !== undefined) { where['line_count'] = scene['line_count']}
                    } else {
                        where['id'] = id;
                    }
                    return scene.find({where: where});
                }
            }
        });
    
    scene.hasMany(line, {foreignKey: 'scene_id' });
    line.belongsTo(scene, {foreignKey: 'scene_id' });

    
    return exports;
}


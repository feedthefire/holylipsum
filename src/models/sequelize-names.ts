////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    lineFields:lineFields;
    sceneFields:sceneFields;
}

export class TableNames {
    line:string = 'line';
    scene:string = 'scene';
}
export var tableNames:TableNames = new TableNames();

export class lineFields {
    id:string = 'id';
    scene_id:string = 'scene_id';
    actor:string = 'actor';
    line:string = 'line';
    date_created:string = 'date_created';
    date_updated:string = 'date_updated';
    scene_scene:string = 'scene_scene';
}
export var lineFields:lineFields = new lineFields();


export class sceneFields {
    id:string = 'id';
    scene:string = 'scene';
    description:string = 'description';
    line_count:string = 'line_count';
    line:string = 'line';
}
export var sceneFields:sceneFields = new sceneFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    scene_id:types.Reference = { tableName: 'scene', primaryKey: 'sceneId', foreignKey: 'scene_id', as: 'Scene_scene'};
}

export var references:References = new References();

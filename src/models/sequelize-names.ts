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
}

export class TableNames {
    line:string = 'line';
}
export var tableNames:TableNames = new TableNames();

export class lineFields {
    id:string = 'id';
    scene:string = 'scene';
    actor:string = 'actor';
    line:string = 'line';
    date_created:string = 'date_created';
    date_updated:string = 'date_updated';
}
export var lineFields:lineFields = new lineFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    id:types.Reference = { tableName: 'line', primaryKey: 'id', foreignKey: 'id', as: undefined};
}

export var references:References = new References();

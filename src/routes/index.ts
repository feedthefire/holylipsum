/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="../typings/sequelize/sequelize.d.ts" />

import express = require("express")
import sequelize = require('sequelize');
import databaseConfig = require('../conf/database-config');
import modelFactory = require('../models/sequelize-model-factory');


export function index(req: express.Request, res: express.Response) {

    // var _:sequelize.Lodash = sequelize.Utils._;
    var dbConfig = new databaseConfig.Config();
    var models = new modelFactory.Models(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig.options);

    var actor = req.query.Actor,
        scene = req.query.Scene,
        numLines = req.query.NumLines,
        params = {
            where: {},
            order: 'RAND()',
            limit: parseInt(numLines) || 10
        };
    if(actor) {
        params.where.actor = {
            $like: '%'+actor+'%'
        };
    }
    if(scene) {
        params.where.scene = scene;
    }

    models.line.findAll(params)
        .then(function(lineRows) {
            var pageData = {
                title: 'The Holy Grail of Lorem Ipsum',
                actor: actor,
                scene: scene,
                numLines: numLines,
                lines: lineRows
            };
            res.render('index', pageData);
        })
        .catch(function (err) {
            console.log(err);
            res.render('error', { title: 'Holy Error', error: err });
        });

};


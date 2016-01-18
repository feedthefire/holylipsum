/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="../typings/sequelize/sequelize.d.ts" />

import express = require("express")
import sequelize = require('sequelize');
import appConfig = require('../conf/app-config');
import modelFactory = require('../models/sequelize-model-factory');


export function view(req: express.Request, res: express.Response) {

    // var _:sequelize.Lodash = sequelize.Utils._;
    var gaConfig = new appConfig.gaConfig();
    var dbConfig = new appConfig.dbConfig();
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
        params.include = [{
            model: models.scene,
            where: {'scene': scene}
        }];
    }

    models.line.findAll(params)
        .then(function(lineRows) {
            var pageData = {
                page: 'index',
                title: 'The Holy Grail\nof Lorem Ipsum',
                gaCode: gaConfig.key,
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


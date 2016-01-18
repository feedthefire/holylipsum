/// <reference path="../typings/lodash/lodash.d.ts" />
/// <reference path="../typings/sequelize/sequelize.d.ts" />

import express = require("express")
import sequelize = require('sequelize');
import appConfig = require('../conf/app-config');
import modelFactory = require('../models/sequelize-model-factory');


export function view(req: express.Request, res: express.Response) {

    var gaConfig = new appConfig.gaConfig();
    var dbConfig = new appConfig.dbConfig();
    var models = new modelFactory.Models(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig.options);

    if(req.params.scene) {

        var scene = req.params.scene.replace('-', ' '),
            pageData = {
                page: 'scene',
                gaCode: gaConfig.key,
                title: 'Holy Lipsum Scene',
                scene: null,
                prevScene: null,
                nextScene: null,
                lines: []
            };

        models.scene.find({
                include: [{
                    model: models.line
                }],
                where: { scene: scene },
                order: 'id ASC'
            })
            .then(function(sceneRow) {
                pageData.title = sceneRow.scene;
                pageData.scene = sceneRow;
                pageData.lines = sceneRow.lines;
                return models.scene.find({where: {id: (pageData.scene.id - 1)}});
            })
            .then(function(prevScene) {
                pageData.prevScene = prevScene;
                return models.scene.find({where: {id: (pageData.scene.id + 1)}});
            })
            .then(function(nextScene) {
                pageData.nextScene = nextScene;
                return;
            })
            .finally(function(){
                res.render('scene', pageData);
            })
            .catch(function (err) {
                res.render('error', { title: 'Holy Lipsum Error', error: err });
            });

    } else {

        models.scene.findAll({
                order: 'id ASC'
            })
            .then(function(sceneRows) {
                var pageData = {
                    page: 'scenes',
                    title: 'Browse Holy Lipsum by Scene',
                    gaCode: gaConfig.key,
                    scenes: sceneRows
                };
                res.render('scenes', pageData);
            })
            .catch(function (err) {
                res.render('error', { title: 'Holy Lipsum Error', error: err });
            });
    
    }

};


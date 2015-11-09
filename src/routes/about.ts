import express = require("express")

export function about(req: express.Request, res: express.Response) {

    var pageData = {
        title: 'About Holy Lorem Ipsum'
    };
    res.render('about', pageData);

};


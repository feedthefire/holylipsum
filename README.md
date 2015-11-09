# holylipsum

Visit http://holylipsum.com/ to see it in action.  

This project is a learning exercise and is far from elegant.  
There are some typescript compile errors in this initial commit, 
but it is still functional.  Will likely be improved as time goes on.


## Install
```
npm install -g gulp
npm install -g typescript
npm install -g tsd
npm install
tsd install 
```

## Run
```
gulp nodemon
```


## Credits to very helpful advice from others

https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/
https://github.com/Microsoft/TypeScriptSamples/tree/master/imageboard
https://github.com/samuelneff/sequelize-auto-ts
https://github.com/samuelneff/sequelize-learning
http://docs.sequelizejs.com/en/latest/



## Other notes

Install typescript definitions and save to tsd.json:
```
tsd query express sequelize lodash bluebird validator body-parser method-override errorhandler serve-static mime --action install --save
```

Generate Models using sequelize-auto-ts:
```
cd sequelize-auto-ts
node lib/cli.js 'database' 'user' 'password' /path/to/src/models/ -mf
```

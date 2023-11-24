'use strict';
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
import config from '../config/config.json' assert {type: 'json'}
const db = {};
export let sequelize;
if(process.env.NODE_ENV == 'testing'){
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'testing.sqlite'
  });
}else{
  sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development,{
    logging: console.log, // Enable logging
  });
}

const importModels = async () => {
  const files = fs.readdirSync(__dirname);

  const modelPromises = files.map(async (file) => {
    if (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    ) {
      const modelModule = await import(path.join(__dirname, file));
      const model = modelModule.default || modelModule;
      db[model.name] = model(sequelize, Sequelize.DataTypes);
    }
  });
  await Promise.all(modelPromises);
};
await importModels();
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
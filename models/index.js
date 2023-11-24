import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../config/config.json' assert { type: "json" };

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const basename = path.basename(filename);

const db = {};
export let sequelize;
if (process.env.NODE_ENV === 'testing') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'testing.sqlite',
  });
} else {
  sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development, {
    logging: console.log, // Enable logging
  });
}

const importModels = async () => {
  const files = fs.readdirSync(dirname);

  const modelPromises = files.map(async (file) => {
    if (
      file.indexOf('.') !== 0
      && file !== basename
      && file.slice(-3) === '.js'
      && file.indexOf('.test.js') === -1
    ) {
      const modelModule = await import(path.join(dirname, file));
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

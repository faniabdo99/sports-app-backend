import db from "../models/index.js";
const resetDatabase = async () => {
    await db.sequelize.sync({ force: true });
    console.log('Database Reseted...')
}
export default resetDatabase;
import db from "./models/index.js";
import app from "./index.js";

const port = process.env.PORT || 3000;
// DB Connection and server bootup
db.sequelize.sync({ force: false }).then(async function () {
    console.log("Database synchronized successfully!");
    app.listen(port, function () {
      console.log("Server is successfully running!");
    });
  }).catch(error => {
    console.error("Database synchronization error:", error);
  });
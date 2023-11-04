import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Middlewares
import authenticationMiddleware from './middlewares/authentication.js';

// Database connection
import db from './models/index.js';

// Controllers
import home_controller from './controllers/home_controller.js';
import user_controller from './controllers/user_controller.js';
import auth_controller from './controllers/auth_controller.js';

// Form Data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Routes
app.use('/', home_controller);
app.use('/users', user_controller);
app.use('/auth', auth_controller);


// DB Connection and server bootup
db.sequelize.sync({ force: false }).then(async function () {
  console.log("Database synchronized successfully!");
  app.listen(port, function () {
    console.log("Server is successfully running!");
  });
}).catch(error => {
  console.error("Database synchronization error:", error);
});


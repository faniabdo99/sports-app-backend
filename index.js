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
import sport_controller from './controllers/sport_controller.js';
import auth_controller from './controllers/auth_controller.js';
import porfolio_controller from './controllers/portfolio_controller.js';
import contact_request_controller from './controllers/contact_request_controller.js';

// Form Data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(express.static('public'))

// Routes
app.use('/', home_controller);
app.use('/users', user_controller);
app.use('/sports', sport_controller);
app.use('/auth', auth_controller);
app.use('/portfolio', porfolio_controller);
app.use('/contact_request', contact_request_controller);

// DB Connection and server bootup
db.sequelize.sync({ force: false }).then(async function () {
  console.log("Database synchronized successfully!");
  app.listen(port, function () {
    console.log("Server is successfully running!");
  });
}).catch(error => {
  console.error("Database synchronization error:", error);
});


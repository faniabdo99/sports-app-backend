import express from 'express';
import dotenv from 'dotenv';

// Controllers
import homeController from './controllers/home_controller.js';
import userController from './controllers/user_controller.js';
import sportController from './controllers/sport_controller.js';
import authController from './controllers/auth_controller.js';
import porfolioController from './controllers/portfolio_controller.js';
import contactRequestController from './controllers/contact_request_controller.js';

dotenv.config();
const app = express();

// Form Data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(express.static('public'));

// Routes
app.use('/', homeController);
app.use('/users', userController);
app.use('/sports', sportController);
app.use('/auth', authController);
app.use('/portfolio', porfolioController);
app.use('/contact_request', contactRequestController);

export default app;

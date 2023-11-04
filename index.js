import express from 'express';
const app = express();
const port = 3000;

// Database connection
import db from './models/index.js';

// Controllers
import user_controller from './controllers/user_controller.js';
import auth_controller from './controllers/auth_controller.js';

// Form Data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Routes
app.use("/users", user_controller);
app.use('/auth', auth_controller);
app.get('/', async (req, res) => {
  // Make sure to use the correct model name
  const users = await db.User.findAll(); // Assuming your model is named User
  res.json(users);
});
app.post('/users/test', (req, res) => {
  return res.json('Worked');
})

// DB Connection and server bootup
db.sequelize.sync({ force: false }).then(async function () {
  console.log("Database synchronized successfully!");
  app.listen(port, function () {
    console.log("Server is successfully running!");
  });
}).catch(error => {
  console.error("Database synchronization error:", error);
});


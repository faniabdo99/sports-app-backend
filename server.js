import { sequelize } from './models/index.js';
import app from './index.js';

const port = process.env.PORT || 3000;
// DB Connection and server bootup
sequelize.sync({ force: false }).then(async () => {
  app.listen(port, () => {
  });
}).catch(() => {
});

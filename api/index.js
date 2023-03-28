const app = require("./src/app");
const port = 3001;
const { sequelize } = require("./src/db");

app.listen(port, () => {
  sequelize.sync({ alter: true });
  console.log(`App listening on port ${port}`);
});
import app from "./app.js";
import { sequelize } from "./database/db.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await sequelize.sync({ force: false});
    app.listen(PORT, () => {
      console.log(`Server listening on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("error: ", error.message, error);
  }
};

startServer();


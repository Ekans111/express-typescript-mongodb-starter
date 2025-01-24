import express, { Request, Response } from "express";
// import bodyParser from "body-parser";
import { db } from "./dbConnection";
import movieRoutes from "./routes/main.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", movieRoutes);

db.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

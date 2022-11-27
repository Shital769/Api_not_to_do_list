import express from "express";

const app = express();
const PORT = 8000;

//middlewares
app.use(express.json());

//rouetrs
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

//handle all the uncaught rouetr request
app.use("*", (req, res, next) => {
  //   res.statusCode(400).json({
  //     status: "error",
  //     message: "404 error not found!",
  //   });

  const error = {
    code: 404,
    message: "404 page not found!",
  };

  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    mesasge: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running on http://localhost: ${PORT}`);
});

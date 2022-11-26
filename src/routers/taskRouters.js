import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hey you",
  });
});
router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      message: "adding data to the db",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.put("/", (req, res) => {
  res.json({
    message: "updating data to the db",
  });
});

export default router;

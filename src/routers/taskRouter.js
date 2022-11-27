import express from "express";

const router = express.Router();

//delete this fake database when integrate with database
let fakeDb = [{ _id: 1, task: "Watching TV", hr: 5, type: "entry" }];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Hey List of the tasks",
    fakeDb,
  });
});
router.post("/", (req, res, next) => {
  try {
    const data = req.body;

    //run the db query to add to database
    fakeDb.push(data);

    res.json({
      status: "success",
      message: "adding data to the db",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.patch("/", (req, res, next) => {
  const { _id, type } = req.body;
  try {
    //update the database
    fakeDb.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
    });

    res.json({
      status: "success",
      message: "updating data to the db",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//use this method to delete single item
// router.delete("/:_id", (req, res, next) => {
// const { _id } = req.params;
// console.log(typeof _id);}
// fakeDb = fakeDb.filter((item) => item._id != id);

// use this method to delete multiple items
router.delete("/:_id", (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);

  //replacing following code by calling database function
  fakeDb = fakeDb.filter(({ _id }) => !_idArg.includes(_id));

  

  try {
    res.json({
      status: "success",
      message: "Deleted successfully",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;

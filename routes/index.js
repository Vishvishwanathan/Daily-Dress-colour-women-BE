const express = require('express');
const UserRoutes = require("./users.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`
    <h1 style="text-align:center">Welcome to Backend of Womens daily dress colour suggrstion</h1>`);
});
router.use("/", UserRoutes);

module.exports = router;

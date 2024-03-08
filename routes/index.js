const express = require('express');
const UserRoutes = require("./users.js");
const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send(`
    <h1 style="text-align:center">Welcome to Backend of Dress colour suggrstion</h1>`);
});
router.use("/", UserRoutes);

module.exports = router;
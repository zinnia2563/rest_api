const express = require("express");
const router = express.Router();
const {createUser, getallUser} = require("../Controller/Users")

router.route("/").post(getallUser);

router.route("/registration").post(createUser);

module.exports = router;
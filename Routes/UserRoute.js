const express = require("express");
const router = express.Router();
const {createUser, getallUser,logUser} = require("../Controller/Users")
router.route("/").post(getallUser);

router.route("/registration").post(createUser);

router.route("/login").post(logUser);

module.exports = router;
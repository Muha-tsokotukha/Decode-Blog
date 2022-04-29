const express = require("express");
const router = express.Router();

const {createTags} = require("./seed");
createTags();

// router.get('/api/tag', );

module.exports = router;
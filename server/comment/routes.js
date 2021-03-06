const express = require("express");
const router = express.Router();
const {getComments,createComment,deleteComment} = require('./controller');
router.get('/api/comments/:blogId', getComments);
router.post('/api/comments', createComment);
router.delete('/api/comments/:id', deleteComment);

module.exports = router;
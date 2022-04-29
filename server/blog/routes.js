const express = require("express");
const router = express.Router();

const {isAuth} = require('../auth/middlewares')
const {isBlogAuthor} = require('./middlewares')
const {createBlog, deleteBlog,getProfileBlogs,updateBlog} = require('./controller');
const {upload} = require('./multer');

router.post("/api/blogs", isAuth, upload.single('image'), createBlog);

router.delete("/api/blogs/:id", isAuth, isBlogAuthor, deleteBlog);

router.get("/api/blogs/profile/:nickname", getProfileBlogs);

router.put("/api/blogs/:id", isAuth, isBlogAuthor, upload.single('image'), updateBlog);

module.exports = router;
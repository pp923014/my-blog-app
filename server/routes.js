const router = require("express").Router();
const { signup, login, checkAuth,logout } = require("./controllers/AuthController");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
} = require("./controllers/BlogController");
const { getComment, addComment, updateComment, deleteComment } = require("./controllers/CommentController");
const verifyToken = require("./middlewares/verifyToken");

router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);
// Add the logout route
router.post("/logout", logout); // No token verification needed for logout
router.post("/createBlog", verifyToken, createBlog);
router.get("/allBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);

router.get("/getComments/:id", getComment);
router.post("/addComment/:id", addComment);
router.put("/updateComment/:blogId/:commentId", updateComment);
router.delete("/deleteComment/:blogId/:commentId", deleteComment);

module.exports = router;

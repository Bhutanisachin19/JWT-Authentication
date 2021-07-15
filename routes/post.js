const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({ posts: { title: "Barca", description: "Random data.... " } });

  // after using the verifyToken middleware we set a req.user so we can access it here also , eg to get the user etc
});

module.exports = router;

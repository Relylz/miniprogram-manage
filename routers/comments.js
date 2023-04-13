var express = require("express");
var router = express.Router();
const comments = require("../controllers/commentsController");

router.post(
  "/getGoodsDetailsCommentsCount",
  comments.getGoodsDetailsCommentsCount
);
router.post("/getGoodsDetailsCommentList", comments.getGoodsDetailsCommentList);
router.post("/getsCommentsDetailCount", comments.getCommentsDeatilCount);
router.post("/getsCommentsDetail", comments.getCommentsDeatil);
module.exports = router;

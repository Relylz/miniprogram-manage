const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const goodRouter = require("./routers/goods");
const swiperRouter = require("./routers/swiper");
const searchRouter = require("./routers/search");
const categoryRouter = require("./routers/category");
const cartRouter = require("./routers/cart");
const userRouter = require("./routers/usercenter");
const commentsRouter = require("./routers/comments");
const addressRouter = require("./routers/address");
const orderRouter = require("./routers/order");

// const fs = require("fs");
// const http = require("http");

const app = express();
const upload = multer({ dest: "upload/" });
// 请求
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/image/girl", (req, res) => {
  const imagePath = path.join(__dirname, "./img/123.jpg");
  console.log("已收到美女图片请求");

  res.sendFile(imagePath);
});
app.get("/image/456", (req, res) => {
  const imagePath = path.join(__dirname, "./img/234.png");
  console.log("已收到图片请求");
  res.sendFile(imagePath);
});

app.use("/goods", goodRouter);
app.use("/swipers", swiperRouter);
app.use("/search", searchRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);
app.use("/usercenter", userRouter);
app.use("/comments", commentsRouter);
app.use("/address", addressRouter);
app.use("/order", orderRouter);

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("File uploaded successfully!");
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

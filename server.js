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
const imgRouter = require("./routers/img");

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
  console.log(req.url, "已收到美女图片请求");

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
app.use("/img", imgRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
// 添加以下代码，启用gzip压缩
const compression = require("compression");
app.use(compression());

// 添加以下代码，启用静态文件服务
app.use(express.static(path.join(__dirname, "public")));

// 添加以下代码，处理404错误
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// 添加以下代码，处理500错误
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

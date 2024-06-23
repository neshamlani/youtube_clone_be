const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Implementation is correct just put the video or thumbnail path in the url
app.use(express.static(`${__dirname}/uploads`));

app.get("/videos", (req, res) => {
  const sampleData = [
    {
      videoUrl: "/videos/bee.mp4",
      videoTitle: "Bee flying away",
      channelName: "Channel 1",
      channelId: "1",
      uploadedAt: new Date().toString(),
      thumbnail: "/thumbnail/bee.jpeg",
      isLiked: false,
      isDisliked: false,
      likeCount: 10,
      dislikedCount: 20,
      isShorts: false,
    },
    {
      videoUrl: "/videos/bee.mp4",
      videoTitle: "Bee flying away 2",
      channelName: "Channel 22",
      channelId: "3",
      uploadedAt: new Date().toString(),
      thumbnail: "/thumbnail/bee.jpeg",
      isLiked: true,
      isDisliked: false,
      likeCount: 10,
      dislikedCount: 20,
      isShorts: false,
    },
    {
      videoUrl: "/videos/bee.mp4",
      videoTitle: "Beeeess",
      channelName: "Channel 12",
      channelId: "4",
      uploadedAt: new Date().toString(),
      thumbnail: "/thumbnail/bee.jpeg",
      isLiked: false,
      isDisliked: true,
      likeCount: 10,
      dislikedCount: 20,
      isShorts: false,
    },
  ];
  res.json({ data: sampleData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

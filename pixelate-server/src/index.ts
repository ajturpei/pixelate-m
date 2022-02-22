import { config } from "dotenv";
import imageUpload from "./imageUpload";
import express from "express";
import path from "path";
import { retouchImage } from "./pixelate";

config();

const app = express();
const dirname = path.resolve();

// Image Upload Routes
app.post("/image", imageUpload.single("image"), (req: any, res: any) => {
  console.log(req, res);
  console.log("this is the response");
  if (!req?.file) {
    res.json({ success: false, error: req });
  }
  res.json({ success: true, fileName: req?.file?.location });
});

// Image Get Routes
app.get("/image/:filename", async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(dirname + "/images/" + filename);
  const imagePath = await retouchImage(filePath, filename);
  if (imagePath) {
    return res.json(imagePath);
  }
  return res.status(400).json("failed to create new image");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

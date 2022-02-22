import multer from "multer";
import s3Client from "./utils/client";
import multerS3 from "multer-s3";
const imageUpload = multer({
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (
      file?.mimetype === "image/jpg" ||
      file?.mimetype === "image/jpeg" ||
      file?.mimetype === "image/gif" ||
      file?.mimetype === "image/png"
    ) {
      return cb(null, true);
    }
    return cb("not valid file extension", false);
  },
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_S3_NAME,
    key: function (_req, file, cb) {
      cb(null, file.originalname); //use Date.now() for unique file keys
    },
  }),
});

export default imageUpload;

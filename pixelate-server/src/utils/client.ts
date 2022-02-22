import aws from "aws-sdk";
import { config } from "dotenv";
config();

// Create an Amazon S3 service client object.
const s3Client = new aws.S3({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  },
});
export default s3Client;

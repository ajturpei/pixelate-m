import { config } from "dotenv";
config();

export const stripFileExtension = (fileName: string) =>
  fileName.substring(0, fileName.lastIndexOf("."));

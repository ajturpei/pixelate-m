import Jimp from "jimp";
import { stripFileExtension } from "./utils/commonUtils";
export const retouchImage = async (imageUrl: string, originalName: string) => {
  try {
    const image = await Jimp.read(imageUrl);
    // Do stuff with the image.
    const newImg = image.clone();
    newImg.dither565();
    newImg.resize(50, 50);
    newImg.greyscale();
    newImg.brightness(-0.2); // adjust the brighness by a value -1 to +1
    newImg.contrast(0.5); // adjust the contrast by a value -1 to +1
    const fileNameNoExt = stripFileExtension(originalName);
    await newImg.writeAsync(
      `../pixelate-app/public/images/${fileNameNoExt}_50x50.png`
    );
    return `/images/${fileNameNoExt}_50x50.png`;
  } catch (err) {
    console.error("image load failed:", err);
    return false;
    // Handle an exception.
  }
};

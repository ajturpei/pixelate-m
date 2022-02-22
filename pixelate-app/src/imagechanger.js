import Jimp from "jimp";
Jimp.read("../public/images/street.jpg")
  .then((image) => {
    console.log("image loaded");
    // Do stuff with the image.
    const newImg = image.clone();
    newImg.dither565();
    newImg.resize(50, 50);
    newImg.greyscale();
    newImg.brightness(-0.2); // adjust the brighness by a value -1 to +1
    newImg.contrast(0.5); // adjust the contrast by a value -1 to +1
    newImg.write("../public/images/new.jpg");
    await newImg.writeAsync(`test/${Date.now()}_150x150.png`);
  })
  .catch((err) => {
    console.error("image load failed:", err);
    // Handle an exception.
  });

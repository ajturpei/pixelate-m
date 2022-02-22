import axios from "axios";
import { PageProps } from "imagePixelate";
import React, { useState } from "react";
import { ImagePixelated } from "react-pixelate";
import { useQuery } from "react-query";

const getImageByName = async (name: string) => {
  const { data } = await axios.get(`/image/${name}`);
  return data;
};

const useUploadedImage = (name: string) => {
  return useQuery(["image", name], () => getImageByName(name), {
    enabled: !!name,
  });
};

const ImageShow = ({ pageProps }: { pageProps: PageProps }) => {
  const {
    upload: { url },
  } = pageProps;
  const [percent, setPercent] = useState(1);
  // const { data, error, isFetching } = useUploadedImage(url);

  const handleBack = () => {
    pageProps.setUpload({ page: 0, url: "" });
  };
  const handleChange = (e: React.FormEvent<any>) => {
    setPercent(+e.currentTarget.value);
  };
  // if (isFetching || error) {
  //   return <div>Loading {error}</div>;
  // }
  return (
    <>
      <div>
        <button onClick={handleBack}>Go backs</button>
      </div>
      <div>
        <ImagePixelated
          src="https://pixelate-swe.s3.eu-north-1.amazonaws.com/Screenshot+2021-06-16+at+10.25.23.png"
          pixelSize={percent}
          width={500}
          height={500}
          fillTransparencyColor={"white"}
        />
      </div>
      <div>
        {percent} px
        <input
          onChange={handleChange}
          type="range"
          min="1"
          max="15"
          step="1"
          value={percent}
        />
      </div>
    </>
  );
};

export default ImageShow;

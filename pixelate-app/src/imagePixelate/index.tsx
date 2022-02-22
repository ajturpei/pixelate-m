import React from "react";
import { useState } from "react";
import ImageShow from "./ImageShow";
import ImageUpload from "./ImageUpload";

type UploadProps = {
  page: number;
  url: string;
};

export type PageProps = {
  upload: UploadProps;
  setUpload: React.Dispatch<React.SetStateAction<UploadProps>>;
};

const MainPage = () => {
  const [upload, setUpload] = useState({ page: 0, url: "" });
  const pageProps = { upload, setUpload };
  return (
    <div>
      {upload.page === 0 && <ImageUpload pageProps={pageProps} />}
      {upload.page === 1 && <ImageShow pageProps={pageProps} />}
    </div>
  );
};

export default MainPage;

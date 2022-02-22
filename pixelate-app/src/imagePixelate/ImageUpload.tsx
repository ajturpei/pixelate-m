import React, { useState } from "react";
import axios from "axios";
import { PageProps } from "./index";

const ImageUpload = ({ pageProps }: { pageProps: PageProps }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e: any) => {
    if (e?.target?.files?.length > 0) {
      setSelectedFile(e?.target?.files[0]);
    } else {
      setSelectedFile(null);
    }
  };
  const handleUpload = async (e: any) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      const { data } = await axios.post("/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      if (data.success && data?.fileName?.length > 0) {
        pageProps.setUpload({ page: 1, url: data.fileName });
      }
    }
  };
  return (
    <div>
      <form id="uploadForm">
        <input type="file" id="file" name="file" onChange={handleFileChange} />
        <button type="submit" onClick={handleUpload}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;

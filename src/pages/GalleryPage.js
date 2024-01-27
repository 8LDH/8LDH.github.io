import React from "react";
import { useParams } from "react-router-dom";
import ImageGalleryComponent from "../components/ImageGalleryComponent";
import ScrollToTop from "../components/ScrollToTop";

const GalleryPage = () => {
  const { folderPath } = useParams();

  return (
    <div>
      <ScrollToTop />
      <ImageGalleryComponent folderPath={folderPath} />
    </div>
  );
};

export default GalleryPage;

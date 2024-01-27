import React, { useState, useEffect } from "react";
import ImageGalleryAlbumComponent from "../components/ImageGalleryAlbumComponent";
import { storage } from "../firebase/config";
import { ref, listAll } from "firebase/storage";
import ScrollToTop from "../components/ScrollToTop";

const GalleryAlbumPage = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const storageRef = ref(storage, "images");
        const items = await listAll(storageRef);
        const folderPaths = items.prefixes.map((prefix) => prefix.name);
        setFolders(folderPaths);
      } catch (error) {
        console.error("Error fetching folders: ", error);
      }
    };
    fetchFolders();
  }, []);

  return (
    <div>
      <ScrollToTop />
      <h1>Galeria</h1>
      <ImageGalleryAlbumComponent folders={folders} />
    </div>
  );
};

export default GalleryAlbumPage;

import React, { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Modal, ProgressBar } from "react-bootstrap";
import Masonry from "react-responsive-masonry";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ImageGalleryComponent.css";

const ImageGalleryComponent = ({ folderPath }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      let imageUrls = [];
      const storageRef = ref(storage, "images/" + folderPath);
      const snapshot = await listAll(storageRef);
      for (let imageRef of snapshot.items) {
        const url = await getDownloadURL(imageRef);
        imageUrls.push(url);
      }
      setImages(imageUrls);
      setLoading(false);
    };

    fetchImages().catch((error) => {
      console.error("Error fetching images: ", error);
      setLoading(false);
    });
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  if (loading) {
    return (
      <div>
        <ProgressBar animated now={100} />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
        <Masonry gutter="10px">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              style={{ width: "100%", display: "block" }}
              onClick={() => handleImageClick(url)}
            />
          ))}
        </Masonry>
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage} alt="" className="modal-image w-100" />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGalleryComponent;

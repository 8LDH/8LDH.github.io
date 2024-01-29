import React, { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Modal, ProgressBar } from "react-bootstrap";
import Masonry from "react-responsive-masonry";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ImageGalleryComponent.css";
import { useSwipeable } from "react-swipeable";

const ImageGalleryComponent = ({ folderPath }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [];
      const storageRef = ref(storage, "images/" + folderPath);
      const snapshot = await listAll(storageRef);

      // Use Promise.all to fetch and set images concurrently
      await Promise.all(
        snapshot.items.map(async (imageRef) => {
          const url = await getDownloadURL(imageRef);
          imageUrls.push(url);
        })
      );

      // Sort the image URLs alphabetically
      imageUrls.sort();

      setImages(imageUrls);
      setLoading(false);
    };

    fetchImages().catch((error) => {
      console.error("Error fetching images: ", error);
      setLoading(false);
      
    });
  }, [folderPath]); // Ensure useEffect runs when folderPath changes

  const handleImageClick = (url, index) => {
    setSelectedImage(url);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(images[currentImageIndex - 1]);
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setSelectedImage(images[currentImageIndex + 1]);
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
  });

  return (
    <div>
      <Masonry gutter="10px">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt=""
            loading="lazy"
            style={{ width: "100%", display: "block" }}
            onClick={() => handleImageClick(url, index)}
          />
        ))}
      </Masonry>
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <div {...handlers} className="modal-container">
          <button className="close-button" onClick={handleCloseModal}>
            &times;
          </button>
          {selectedImage && (
            <>
              <img
                src={selectedImage}
                alt=""
                className="modal-image w-100"
                loading="eager"
              />
              {currentImageIndex > 0 && (
                handlePrevImage
              )}
              {currentImageIndex < images.length - 1 && (
                handleNextImage
              )}
            </>
          )}
        </div>
      </Modal>

      {loading && images.length === 0 && (
        <div>
          <ProgressBar animated now={100} />
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryComponent;

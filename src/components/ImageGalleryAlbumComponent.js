import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../styles/ImageGalleryAlbumComponent.css"; // Add CSS file for styling

const ImageGalleryAlbumComponent = ({ folders }) => {
  // Sort folders by year
  const sortFoldersByYear = (folders) => {
    return folders.sort((a, b) => {
      const yearA = extractYear(a);
      const yearB = extractYear(b);
      return yearB - yearA;
    });
  };

  // Extract the year from the folder name
  const extractYear = (folderName) => {
    const yearMatch = folderName.match(/\b\d{4}\b/);
    return yearMatch ? parseInt(yearMatch[0]) : 0;
  };

  // Helper function to categorize folders
  const categorizeFolders = (folders) => {
    const obozy = [];
    const zimowiska = [];
    const inneWyprawy = [];

    folders.forEach((folder) => {
      if (folder.includes("Obóz")) {
        obozy.push(folder);
      } else if (folder.includes("Zimowisko")) {
        zimowiska.push(folder);
      } else {
        inneWyprawy.push(folder);
      }
    });

    return {
      obozy: sortFoldersByYear(obozy),
      zimowiska: sortFoldersByYear(zimowiska),
      inneWyprawy: sortFoldersByYear(inneWyprawy),
    };
  };

  // Categorize folders
  const categorizedFolders = categorizeFolders(folders);

  return (
    <Row>
      <Col sm={12} md={4}>
        <div className="image-gallery-section">
          <h3>Obozy</h3>
          <ul>
            {categorizedFolders.obozy.map((folder, index) => (
              <li key={index}>
                <Link
                  to={`/galeria/${encodeURIComponent(folder)}`}
                  className="visited-link"
                >
                  {folder}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col sm={12} md={4}>
        <div className="image-gallery-section">
          <h3>Zimowiska</h3>
          <ul>
            {categorizedFolders.zimowiska.map((folder, index) => (
              <li key={index}>
                <Link
                  to={`/galeria/${encodeURIComponent(folder)}`}
                  className="visited-link"
                >
                  {folder}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col sm={12} md={4}>
        <div className="image-gallery-section">
          <h3>Inne Wyprawy</h3>
          <ul>
            {categorizedFolders.inneWyprawy.map((folder, index) => (
              <li key={index}>
                <Link
                  to={`/galeria/${encodeURIComponent(folder)}`}
                  className="visited-link"
                >
                  {folder}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default ImageGalleryAlbumComponent;

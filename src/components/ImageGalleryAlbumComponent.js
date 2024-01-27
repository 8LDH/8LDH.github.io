import React from "react";
import { Link } from "react-router-dom";

const ImageGalleryAlbumComponent = ({ folders }) => {
  const sortFoldersByYear = (folders) => {
    return folders.sort((a, b) => {
      // Extract years from folder names
      const yearA = extractYear(a);
      const yearB = extractYear(b);

      // Compare years
      return yearB - yearA; // For descending order; use yearA - yearB for ascending
    });
  };

  const extractYear = (folderName) => {
    const yearMatch = folderName.match(/\b\d{4}\b/); // Find a four-digit number in the folder name
    return yearMatch ? parseInt(yearMatch[0]) : 0; // Return the year or 0 if not found
  };

  const sortedFolders = sortFoldersByYear(folders);

  return (
    <div>
      <ul>
        {sortedFolders.map((folder, index) => (
          <li key={index}>
            <Link to={`/galeria/${encodeURIComponent(folder)}`}>{folder}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGalleryAlbumComponent;

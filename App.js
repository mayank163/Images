import React, { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';
import axios from 'axios';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=12`);
        setImages(prevImages => [...prevImages, ...response.data]);
        setHasMorePages(response.data.length === 12);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const imagesPerPage = 12; // Adjust as needed
  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div className="App   
 container">
      <ImageGrid images={images} isLoading={isLoading} />
      {hasMorePages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

export default App;
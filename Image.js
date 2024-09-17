import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Image = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = document.createElement('img');
    image.onload = () => setIsLoaded(true);
    image.src = src;
  }, [src]);

  return (
    <div>
      {isLoaded ? (
        <Img src={src} alt={alt} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Image;
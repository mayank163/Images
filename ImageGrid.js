import React from 'react';
import Image from './Image';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImageGrid = ({ images, isLoading }) => {
  return (
    <Grid>
      {isLoading ? (
        <p>Loading images...</p>
      ) : (
        images.map(image => (
          <Image key={image.id} src={image.download_url} alt={image.author} />
        ))
      )}
    </Grid>
  );
};

export default ImageGrid;
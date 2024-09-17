import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 10px; /* Adjust margins for better spacing */
`;

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div>
      {currentPage > 1 && (
        <Button onClick={onPrevious}>Previous</Button>
      )}
      {currentPage < totalPages && (
        <Button onClick={onNext}>Next</Button>
      )}
    </div>
  );
};

export default Pagination;
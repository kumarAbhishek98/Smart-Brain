import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  console.log(images);
  const showImages = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{showImages}</div>;
};

export default ImageList;

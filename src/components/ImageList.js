import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images, count }) => {
  console.log(images);
  console.log(count);
  if (count === undefined) {
    return <div></div>;
  } else if (count > 0) {
    const showImages = images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    const showImages1 = images1.map(image1 => {
      return <ImageCard image={image1} />;
    });
    return (
      <div className="image-list">
        {showImages}
        {showImages1}
      </div>
    );
  } else {
    return <div>No Results were Found for this search term</div>;
  }
};

export default ImageList;

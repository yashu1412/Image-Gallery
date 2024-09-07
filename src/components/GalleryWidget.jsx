import React, { useState } from 'react';
import './Gallery.css';

function GalleryWidget() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  const IMAGES_PER_VIEW = 3;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImages([...images, e.target.result]);
    };

    reader.readAsDataURL(file);
  };

  const deleteImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
    if (currentIndex > updatedImages.length - IMAGES_PER_VIEW) {
      setCurrentIndex(Math.max(0, currentIndex - IMAGES_PER_VIEW));
    }
  };

  const nextImageSet = () => {
    if (images.length > IMAGES_PER_VIEW) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + IMAGES_PER_VIEW, images.length - IMAGES_PER_VIEW));
    }
  };

  const prevImageSet = () => {
    if (images.length > IMAGES_PER_VIEW) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - IMAGES_PER_VIEW, 0));
    }
  };

  const currentImages = images.slice(currentIndex, currentIndex + IMAGES_PER_VIEW);

  return (
<div className="bg-[#313542] rounded-3xl shadow-lg p-4 lg:p-8">
  <div className="flex justify-between items-center mb-4 lg:mb-6 -space-x-10">
    <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-zinc-400 flex items-center justify-center shadow-lg ml-0">
      <span className="text-zinc-400 text-xl lg:text-2xl">?</span>
    </button>
    <h2 className="text-xl lg:text-2xl font-semibold p-4 bg-black text-white rounded-2xl w-[150px] lg:w-[150px] flex flex-col items-center shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] ">
      Gallery
    </h2>
    <label
      htmlFor="imageUpload"
      className="bg-black hover:bg-[#45454f] text-white font-semibold py-3 px-4 lg:py-4 lg:px-5 rounded-full shadow-[5px_5px_5px_5px_rgba(38,38,40,0.5)] relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_1px_1px_3px_1px_rgba(255,255,255,0.3)]"
    >
      + ADD IMAGE
    </label>
    <input
      type="file"
      id="imageUpload"
      accept="image/*"
      onChange={handleImageUpload}
      hidden
    />
    <div className="space-x-3 text-xl lg:text-2xl">
      <button
        onClick={prevImageSet}
        disabled={currentIndex === 0}
        className={`bg-[#131517] hover:bg-[#16174a] text-gray-300 font-extrabold w-11 h-11 lg:w-11 lg:h-11 rounded-full shadow-[0px_0px_10px_2px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_15px_3px_rgba(255,255,255,0.3)] duration-200 hover:scale-105 ${
    currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        🡐
      </button>
      <button
        onClick={nextImageSet}
        disabled={currentIndex + IMAGES_PER_VIEW >= images.length}
        className={`bg-[#131517] hover:bg-[#16174a] text-gray-300 font-extrabold w-11 h-11 lg:w-11 lg:h-11 rounded-full shadow-[0px_0px_10px_2px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_15px_3px_rgba(255,255,255,0.3)] duration-200 hover:scale-105 ${
    currentIndex + IMAGES_PER_VIEW >= images.length ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        🡒
      </button>
    </div>
  </div>

  <div className="flex flex-row justify-start items-center space-x-10 lg:space-x-20">
  <button className="w-8 h-8 flex items-center justify-center shadow-lg">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
              </div>
            </button>

    <div>
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
          {currentImages.map((image, index) => (
            <div key={index} className="image-container shadow-[15px_10px_15px_10px_rgba(38,38,40,0.5)]">
              <img src={image} alt="Gallery Item" />
              <button onClick={() => deleteImage(index)} className="delete-button shadow-[3px_3px_10px_rgba(0,0,0,0.5)]">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

  {images.length === 0 && <p className="text-white text-center mt-4">No images uploaded</p>}
</div>

  );
}

export default GalleryWidget;

import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className="card-image">
      <div className="card-image-image">
        <a href={image.largeImageURL} rel="noopener noreferrer" target="_blank"> <img className="card-image-img" src={image.largeImageURL} alt={image.tags}/></a>
      </div>
      <div className="content-tags">
        <p>{image.tags}</p>
      </div>
    </div>
  )
}

export default ImageCard
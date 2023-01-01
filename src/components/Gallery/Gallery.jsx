import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="Gallery">
            <p>#ojjo_jewerly</p>
            <h1>Мы в социальных сетях</h1>
            <div className="img_hover">
                <div className="gallery_video">
                    <div className="gallery_video1"></div>
                    <div className="gallery_video2"></div>
                    <div className="gallery_video3"></div>
                </div>
                <div className="gallery_img">
                    <div className="gallery_img1"></div>
                    <div className="gallery_img2"></div>
                    <div className="gallery_img3"></div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
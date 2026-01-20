import React, { useState } from 'react';
import './AppCatalog.css'; 
import arrowIcon from '../assets/arrow-next.png';
import videoSrc from '../assets/AppCatalogVideo.mp4'; 

export default function AppCatalog({ onNext, onBack }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="catalog-page">
      
      <div className="catalog-text-section">
        <h1 className="catalog-title">בדיקת גרסאות</h1>
        <h2 className="catalog-subtitle">צפה בסרטון הדרכה</h2>
        <p className="catalog-description">
          כניסה לקטלוג ווידוא גרסה עדכנית.
        </p>
      </div>

      <div className="catalog-video-container">
        <div className="video-glow"></div>
        <div className="catalog-video-wrapper">
          <video 
            className="catalog-video" 
            controls 
            onEnded={() => setIsVideoEnded(true)}
            autoPlay 
            muted 
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            הדפדפן שלך לא תומך בוידאו.
          </video>
        </div>
      </div>
      <button className="prev-arrow" onClick={onBack}>
        <img src={arrowIcon} alt="חזור" />
      </button>

      {isVideoEnded && (
        <button className="next-arrow" onClick={onNext}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}
    </div>
  );
}
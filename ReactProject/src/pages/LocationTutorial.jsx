import React, { useState } from 'react'; 
import './LocationTutorial.css'; 
import arrowIcon from '../assets/arrow-next.png'; 
import locationVideo from '../assets/location.mp4'; 

export default function LocationTutorial({ onNext, onBack }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="loc-page">
      <div className="loc-text-section">
        <h1 className="loc-title">דיווח מיקום ("אוק")</h1>
        <h2 className="loc-subtitle">צפה בסרטון הדרכה</h2>
        <p className="loc-description">
          שליחת מיקום על פי שם תפקיד.<br />
          לאחר השליחה השם יעודכן במערכת
        </p>
      </div>

      <div className="loc-video-container">
        <div className="loc-video-wrapper">
          <video 
            className="loc-video-element" 
            controls 
            autoPlay 
            muted 
            onEnded={() => setIsVideoEnded(true)}
          >
            <source src={locationVideo} type="video/mp4" />
            הדפדפן שלך לא תומך בוידאו.
          </video>
        </div>
      </div>

      <button className="loc-nav-arrow loc-back-arrow" onClick={onBack}>
        <img src={arrowIcon} alt="חזור" />
      </button>

      {isVideoEnded && (
        <button className="loc-nav-arrow loc-next-arrow" onClick={onNext}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
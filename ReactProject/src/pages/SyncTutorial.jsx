import React, { useState } from 'react'; 
import './SyncTutorial.css'; 
import arrowIcon from '../assets/arrow-next.png'; 
import syncVideo from '../assets/sync-video.mp4'; 

export default function SyncTutorial({ onNext, onBack }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="sync-page">
      <div className="sync-text-section">
        <h1 className="sync-title">סנכרון ועדכון אפליקציות</h1>
        <h2 className="sync-subtitle">צפה בסרטון הדרכה</h2>
        <p className="sync-description">
          סרטון זה מדגים את תהליך הסנכרון הידני<br />
          באפליקציית ה-Hub, הנדרש לקבלת עדכונים שוטפים.
        </p>
      </div>
      
      <div className="sync-video-container">
        <div className="sync-video-wrapper">
          <video 
            className="phone-video" 
            controls 
            playsInline                // חובה: מונע פתיחה במסך מלא באייפון
            webkit-playsinline="true"  // תמיכה לאייפונים ישנים
            onEnded={() => setIsVideoEnded(true)}
          >
            <source src={syncVideo} type="video/mp4" />
            הדפדפן שלך לא תומך בוידאו.
          </video>
        </div>
      </div>

      <button className="nav-arrow back-arrow" onClick={onBack}>
        <img src={arrowIcon} alt="חזור" />
      </button>
      
      {isVideoEnded && (
        <button className="nav-arrow next-arrow" onClick={onNext}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
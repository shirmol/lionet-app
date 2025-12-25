import React, { useState } from 'react';
import './Vpn.css';
import arrowIcon from '../assets/arrow-next.png'; 
import vpnVideo from '../assets/VpnVideo.mp4'; 

export default function Vpn({ onNext, onBack }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="vpn-page">
      <div className="vpn-text-section">
        <h1 className="vpn-title">חיבור ל-VPN</h1>
        
        <h2 className="vpn-subtitle">צפה בסרטון הדרכה</h2>
        <p className="vpn-description">
          סרטון זה מציג את אופן ההתחברות הראשוני לרשת המבצעית,
          המאפשר גישה לכלל האפליקציות במכשיר.
        </p>
      </div>

      <div className="vpn-video-container">
        <div className="video-glow"></div>
        <div className="vpn-video-wrapper">
           <video 
             className="phone-video" 
             controls 
             playsInline
             src={vpnVideo} 
             onEnded={() => setIsVideoEnded(true)}
           >
             הדפדפן שלך לא תומך בנגן וידאו.
           </video>
        </div>
      </div>
      <button className="nav-arrow back-arrow" onClick={onBack}>
        <img src={arrowIcon} alt="חזור" />
      </button>
      {isVideoEnded && (
        <button className="nav-arrow next-arrow" onClick={onNext}>
          <img src={arrowIcon} alt="המשך" />
        </button>
      )}

    </div>
  );
}
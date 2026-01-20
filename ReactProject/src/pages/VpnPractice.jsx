import React, { useState, useEffect } from 'react';
import './VpnPractice.css';
import arrowIcon from '../assets/arrow-next.png';
import homeScreenImg from '../assets/lionet-phone2.jpg';
import connectScreenImg from '../assets/vpn-connect.jpg';
import connectedScreenImg from '../assets/vpn-timer.jpg'; 

export default function VpnPractice({ onNext, onBack }) {
  const [internalStep, setInternalStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (internalStep === 3) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [internalStep]);

  useEffect(() => {
    setShowError(false);
  }, [internalStep]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (num) => num.toString().padStart(2, '0');
    return `${hours}:${pad(minutes)}:${pad(secs)}`;
  };

  const handleHotspotClick = (e) => {
    e.stopPropagation();
    setShowError(false);
    if (internalStep === 1) setInternalStep(2);
    else if (internalStep === 2) setInternalStep(3);
  };

  const handleWrongClick = () => {
    if (internalStep < 3) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  const handleBackClick = () => {
    setShowError(false);
    if (internalStep === 3) setInternalStep(2);
    else if (internalStep === 2) setInternalStep(1);
    else onBack();
  };

  const handleNextClick = () => {
    onNext(); 
  };

  return (
    <div className="vpn-practice-page">
      
      <div className="practice-header">
        {internalStep < 3 ? (
          <>
            <h1 className="practice-title">עכשיו תורכם לתרגל</h1>
            <h2 className="practice-instruction">
              {internalStep === 1 ? "הכנס לאפליקצית VPN" : "התחברות לרשת הסלולרית"}
            </h2>
          </>
        ) : (
          <>
            <h1 className="practice-title">השעון רץ: אתם מחוברים לרשת</h1>
            <h2 className="practice-instruction">כעת תוכלו להתחיל להשתמש במכשיר</h2>
          </>
        )}
      </div>

      <div className="phone-interactive-container" onClick={handleWrongClick}>
        
        <img 
          src={
            internalStep === 1 ? homeScreenImg : 
            internalStep === 2 ? connectScreenImg : 
            connectedScreenImg
          } 
          alt="Phone Screen" 
          className="phone-img" 
        />
        
        {showError && internalStep < 3 && (
            <div className="error-bubble">
               זה לא הכפתור, נסה שוב
            </div>
        )}
        
        {internalStep < 3 && (
          <button 
            className={internalStep === 1 ? "app-hotspot vpn-icon-pos" : "app-hotspot connect-btn-pos"}
            onClick={handleHotspotClick}
          ></button>
        )}

        {internalStep === 3 && (
          <div className="timer-overlay">
            <div className="timer-numbers">{formatTime(seconds)}</div>
          </div>
        )}

      </div>

      <button className="prev-arrow" onClick={handleBackClick}>
        <img src={arrowIcon} alt="חזור" />
      </button>

      {internalStep === 3 && (
        <button className="next-arrow" onClick={handleNextClick}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
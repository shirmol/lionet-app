import React, { useState } from 'react';
import './LocationPractice.css'; 
import arrowIcon from '../assets/arrow-next.png';
import step1Img from '../assets/LocationStep1.jpg'; 
import step2Img from '../assets/LocationStep2.png'; 

export default function LocationPractice({ onNext, onBack }) {
  const [step, setStep] = useState(1);
  const [inputText, setInputText] = useState(""); 
  const handleAppClick = () => { setStep(2); };
  const handleSaveClick = () => { setStep(3); };
  const handleClosePopup = () => { setStep(4); };
  const handleBackClick = () => {
    if (step === 4) {
        setStep(1); 
        setInputText(""); 
    } else if (step === 2) {
        setStep(1); 
        setInputText(""); 
    } else {
        onBack(); 
    }
  };

  return (
    <div className="lp-container">
      <div className="lp-text-area">
        {step === 1 && (
          <>
             <h1 className="lp-main-title">עכשיו תורכם לתרגל</h1>
             <h2 className="lp-sub-text">היכנס ל <span className="lp-highlight">device info tracker</span></h2>
          </>
        )}
        {(step >= 2) && (
          <>
             <h1 className="lp-main-title">עכשיו תעדכנו את שם תפקידכם</h1>
             <h2 className="lp-sub-text">לחץ על שמירה לסיום</h2>
          </>
        )}
      </div>

      <div className="lp-device-wrapper">
        {step === 1 && (
          <>
            <img src={step1Img} alt="Home Screen" className="lp-device-image" />
            <button className="lp-click-zone lp-pos-step1" onClick={handleAppClick}></button>
          </>
        )}

        {step >= 2 && (
          <>
            <img src={step2Img} alt="App Form" className="lp-device-image" />
            <input 
                type="text" 
                className="lp-input-zone lp-pos-input" 
                placeholder="הקלד כאן..." 
                value={inputText}
                disabled={step === 4} 
                onChange={(e) => setInputText(e.target.value)}
            />
            {step === 2 && (
                <button className="lp-click-zone lp-pos-save" onClick={handleSaveClick}></button>
            )}
          </>
        )}

        {step === 3 && (
            <div className="lp-popup-overlay">
                <div className="lp-popup-card">
                    <button className="lp-close-btn" onClick={handleClosePopup}>X</button>
                    
                    <div className="lp-popup-header">
                        <h2 className="lp-popup-title">כל הכבוד</h2>
                        <div className="lp-popup-icon">✓</div>
                    </div>
                    
                    <p className="lp-popup-text">שם תפקידכם עודכן במשוואה</p>
                </div>
            </div>
        )}
        
      </div>

      {step !== 3 && (
        <button 
          className="lp-arrow-btn lp-arrow-back" 
          onClick={handleBackClick}
        >
            <img src={arrowIcon} alt="חזור" />
        </button>
      )}

      {step === 4 && (
        <button 
          className="lp-arrow-btn lp-arrow-next" 
          onClick={onNext}
        >
            <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
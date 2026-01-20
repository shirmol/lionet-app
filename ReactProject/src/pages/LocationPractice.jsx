import React, { useState } from 'react';
import './LocationPractice.css'; 
import arrowIcon from '../assets/arrow-next.png';
import step1Img from '../assets/LocationStep1.jpg'; 
import step2Img from '../assets/LocationStep2.png'; 

export default function LocationPractice({ onNext, onBack }) {
  const [step, setStep] = useState(1);
  const [inputText, setInputText] = useState(""); 
  const [showError, setShowError] = useState(false);

  const handleAppClick = (e) => {
    e.stopPropagation(); 
    setShowError(false);
    setStep(2);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation(); 
    setShowError(false);
    setStep(3);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleWrongClick = () => {
    if (step === 1 || step === 2) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  const handleClosePopup = () => {
    setStep(4);
  };

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
    <div className="location-practice-page">
      
      <div className="practice-header">
        {step === 1 && (
          <>
             <h1 className="practice-title">עכשיו תורכם לתרגל</h1>
             <h2 className="practice-instruction">היכנס ל <span className="highlight-text">device info tracker</span></h2>
          </>
        )}
        {(step >= 2) && (
          <>
             <h1 className="practice-title">עכשיו תעדכנו את שם תפקידכם</h1>
             <h2 className="practice-instruction">לחץ על שמירה לסיום</h2>
          </>
        )}
      </div>

      <div className="phone-container" onClick={handleWrongClick}>
        
        {step === 1 && (
          <>
            <img src={step1Img} alt="Home Screen" className="practice-phone-img" />
            <button className="transparent-hotspot loc-app-pos" onClick={handleAppClick}></button>
          </>
        )}

        {step >= 2 && (
          <>
            <img src={step2Img} alt="App Form" className="practice-phone-img" />
            
            <input 
                type="text" 
                className="loc-input-field loc-input-pos" 
                placeholder="הקלד כאן..." 
                value={inputText}
                disabled={step === 4} 
                onClick={handleInputClick} 
                onChange={(e) => setInputText(e.target.value)}
            />
            
            {step === 2 && (
                <button className="transparent-hotspot loc-save-pos" onClick={handleSaveClick}></button>
            )}
          </>
        )}

        {showError && step < 3 && (
            <div className="error-bubble">
                זה לא הכפתור, נסה שוב
            </div>
        )}

        {/* מודל הצלחה */}
        {step === 3 && (
            <div className="modal-overlay">
                <div className="success-modal">
                    <button className="modal-close-btn" onClick={handleClosePopup}>X</button>
                    
                    <div className="modal-header-row">
                        <h2 className="modal-title">כל הכבוד</h2>
                        <div className="modal-icon">✓</div>
                    </div>
                    
                    <p className="modal-text">שם תפקידכם עודכן במשוואה</p>
                </div>
            </div>
        )}
        
      </div>

      {step !== 3 && (
        <button className="prev-arrow" onClick={handleBackClick}>
           <img src={arrowIcon} alt="חזור" />
        </button>
      )}

      {step === 4 && (
        <button className="next-arrow" onClick={onNext}>
           <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
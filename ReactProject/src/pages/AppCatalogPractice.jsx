import React, { useState } from 'react';
import './AppCatalogPractice.css'; 
import arrowIcon from '../assets/arrow-next.png';
import step1Img from '../assets/AppCatalog1.jpg'; 
import step2Img from '../assets/AppCatalog2.png'; 

export default function AppCatalogPractice({ onNext, onBack }) {
  const [internalStep, setInternalStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStatus, setQuizStatus] = useState("idle"); 
  const [showError, setShowError] = useState(false); 

  const CORRECT_ANSWER = "6.10.3";

  const handleAppClick = (e) => {
    e.stopPropagation(); 
    setShowError(false);
    setInternalStep(2);
  };

  const handleWrongClick = () => {
    if (internalStep === 1) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption === CORRECT_ANSWER) {
      setQuizStatus("success");
    } else {
      setQuizStatus("error");
    }
  };

  const handleBackClick = () => {
    if (internalStep === 2) {
      setInternalStep(1);
      setQuizStatus("idle");
      setSelectedOption(null);
      setShowError(false);
    } 
    else {
      onBack();
    }
  };

  const handleNextClick = () => {
    onNext(); 
  };

  return (
    <div className="catalog-practice-page">
      {internalStep === 1 && (
        <>
          <div className="practice-header">
             <h1 className="practice-title">עכשיו תורכם לתרגל</h1>
             <h2 className="practice-instruction">להיכנס ל APP CATALOG</h2>
          </div>

          <div className="step1-phone-container" onClick={handleWrongClick}>
            <img src={step1Img} alt="Home Screen" className="step1-phone-img" />
            
            {showError && (
                <div className="error-bubble">
                    זה לא הכפתור, נסה שוב
                </div>
            )}

            <button className="app-hotspot catalog-icon-pos" onClick={handleAppClick}></button>
          </div>
        </>
      )}

      {internalStep === 2 && (
        <div className="split-layout">
           <div className="quiz-half">
              <div className="quiz-content">
                  <h1 className="quiz-title">בדיקת גרסה</h1>
                  <p className="quiz-subtitle">הביטו במסך וזהו את גרסת Blue Wolf</p>
                  
                  <div className="quiz-options">
                    {["6.10.3", "3.10.0", "4.41.2.1", "1.4.0"].map((option) => (
                        <label 
                          key={option} 
                          className={`option-label ${selectedOption === option ? 'selected' : ''}`}
                        >
                          <input 
                              type="radio" 
                              name="version" 
                              className="radio-input"
                              value={option}
                              onChange={() => {
                                  setSelectedOption(option);
                                  setQuizStatus("idle"); 
                              }}
                          />
                          <span style={{ marginRight: '15px' }}>{option}</span>
                        </label>
                    ))}
                  </div>

                  <button className="check-btn" onClick={handleCheckAnswer}>
                      בדיקה
                  </button>
                  
                  {quizStatus === "error" && (
                      <div className="feedback-msg feedback-error">לא נכון, נסו שנית</div>
                  )}
                  
                  {quizStatus === "success" && (
                      <div className="feedback-msg feedback-success">כל הכבוד! ✔</div>
                  )}
              </div>
           </div>

           <div className="phone-half">
              <img src={step2Img} alt="Apps List" className="step2-phone-img" />
           </div>

        </div>
      )}

      <button className="prev-arrow" onClick={handleBackClick}>
        <img src={arrowIcon} alt="חזור" />
      </button>

      {internalStep === 2 && quizStatus === "success" && (
        <button className="next-arrow" onClick={handleNextClick}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
import React, { useState } from 'react';
import './AppCatalogPractice.css'; 
import arrowIcon from '../assets/arrow-next.png';
import step1Img from '../assets/AppCatalog1.jpg'; 
import step2Img from '../assets/AppCatalog2.png'; 

export default function AppCatalogPractice({ onNext, onBack }) {
  const [internalStep, setInternalStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStatus, setQuizStatus] = useState("idle"); 
  const CORRECT_ANSWER = "6.10.3";

  const handleAppClick = () => {
    setInternalStep(2);
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
    } 
    else {
      onBack();
    }
  };

  const handleNextClick = () => {
    onNext(); 
  };

  return (
    <div className="acp-container">
      {internalStep === 1 && (
        <>
          <div className="acp-text-area">
             <h1 className="acp-main-title">עכשיו תורכם לתרגל</h1>
             <h2 className="acp-sub-text">להיכנס ל APP CATALOG</h2>
          </div>

          <div className="acp-device-wrapper">
            <img src={step1Img} alt="Home Screen" className="acp-device-image" />
            <button className="acp-click-zone acp-pos-step1" onClick={handleAppClick}></button>
          </div>
        </>
      )}

      
      {internalStep === 2 && (
        <div className="acp-split-layout">
           <div className="acp-quiz-section">
              <h1 className="acp-quiz-title">הגעתם לעמוד האפליקציות וגרסותיהם</h1>
              <p className="acp-quiz-subtitle">הביטו במסך הטלפון שמשמאל</p>
              <div className="acp-question"> מהי הגרסה של אפליקציית blue wolf? </div>
              {["6.10.3", "3.10.0", "4.41.2.1", "1.4.0"].map((option) => (
                  <label 
                    key={option} 
                    className={`acp-option-label ${selectedOption === option ? 'selected' : ''}`}
                  >
                    <input 
                        type="radio" 
                        name="version" 
                        className="acp-radio-input"
                        value={option}
                        onChange={() => {
                            setSelectedOption(option);
                            setQuizStatus("idle"); 
                        }}
                    />
                    <span style={{ marginRight: '10px' }}>{option}</span>
                  </label>
              ))}

              <button className="acp-check-btn" onClick={handleCheckAnswer}>
                  בדקו
              </button>
              {quizStatus === "error" && (
                  <div className="acp-feedback feedback-error">לא נכון, נסו שנית</div>
              )}
              
              {quizStatus === "success" && (
                  <div className="acp-feedback feedback-success">כל הכבוד! ✔</div>
              )}
           </div>
           <div className="acp-device-wrapper">
              <img src={step2Img} alt="Apps List" className="acp-device-image" />
           </div>

        </div>
      )}
      <button className="acp-arrow-btn acp-arrow-back" onClick={handleBackClick}>
        <img src={arrowIcon} alt="חזור" />
      </button>
      {internalStep === 2 && quizStatus === "success" && (
        <button className="acp-arrow-btn acp-arrow-next" onClick={handleNextClick}>
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
import React from 'react';
import './LockScreen.css'; 
import arrowIcon from '../assets/arrow-next.png'; 

export default function LockScreen({ onNext, onBack }) {
  const passwordSequence = [2, 5, 8, 0];
  
  const getButtonStyle = (num) => {
    const index = passwordSequence.indexOf(num);
    if (index === -1) return {};
    return { animationDelay: `${index * 0.5}s` };
  };

  const getButtonClass = (num) => {
    return passwordSequence.includes(num) ? 'key-btn glow-animated' : 'key-btn';
  };

  return (
    <div className="page-lock">
      <div className="lock-container">
        
        <h1 className="lock-title">סיסמת המכשיר</h1>
        <p className="lock-subtitle">
          שימו לב! המכשיר מגיע עם סיסמה קבועה ואחידה.
          <br/>
          <strong>הסיסמה היא: 2580</strong>
        </p>

        <div className="pin-display">
          <div className="pin-dot filled"></div>
          <div className="pin-dot filled"></div>
          <div className="pin-dot filled"></div>
          <div className="pin-dot filled"></div>
        </div>

        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div 
              key={num} 
              className={getButtonClass(num)}
              style={getButtonStyle(num)}
            >
              {num}
            </div>
          ))}
          
          <div className="key-placeholder"></div>
          
          <div 
            className={getButtonClass(0)}
            style={getButtonStyle(0)}
          >
            0
          </div>
          
          <div className="key-placeholder"></div>
        </div>

      </div>

      <button className="prev-arrow" onClick={onBack}>
        <img src={arrowIcon} alt="חזור" />
      </button>

      <button className="next-arrow" onClick={onNext}>
        <img src={arrowIcon} alt="המשך" />
      </button>

    </div>
  );
}
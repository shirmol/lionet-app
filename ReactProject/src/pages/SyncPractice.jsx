import React, { useState } from 'react';
import './SyncPractice.css'; 
import arrowIcon from '../assets/arrow-next.png';
import homeScreenImg from '../assets/lionet-phone2.jpg'; 
import hubInnerImg from '../assets/Hub1.jpg'; 
import hubProfileImg from '../assets/Hub2.jpg'; 

export default function SyncPractice({ onNext, onBack }) {
  const [internalStep, setInternalStep] = useState(1);
  const [showModal, setShowModal] = useState(false); 

  const handleHubClick = () => setInternalStep(2);

  const handleDeviceClick = () => setInternalStep(3);

  const handleSyncClick = () => {
    setInternalStep(4);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackClick = () => {
    if (showModal) return; 
    
    if (internalStep === 4) setInternalStep(3);
    else if (internalStep === 3) setInternalStep(2);
    else if (internalStep === 2) setInternalStep(1);
    else onBack();
  };

  const handleNextClick = () => {
    if (showModal) return; 
    onNext(); 
  };

  const getCurrentImage = () => {
    if (internalStep === 1) return homeScreenImg;
    if (internalStep === 2) return hubInnerImg;
    if (internalStep === 3) return hubProfileImg;
    return hubProfileImg; 
  };

  return (
    <div className="sync-practice-page">
      {showModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <button className="modal-close-btn" onClick={handleCloseModal}>X</button>
            <div className="modal-header-row">
               <div className="modal-title">כל הכבוד</div>
               <div className="modal-icon">✔</div>
            </div>
            <div className="modal-text">האפליקציות מסונכרנות במכשיר</div>
          </div>
        </div>
      )}

      <div className="sync-header">
        {internalStep === 1 && (
          <>
            <h1 className="sync-title">עכשיו תורכם לתרגל</h1>
            <h2 className="sync-instruction">הכנס לאפליקציית Hub</h2>
          </>
        )}
        {internalStep === 2 && (
          <>
            <h1 className="sync-title">בתוך האפליקציה</h1>
            <h2 className="sync-instruction">לחץ על 'מכשיר זה'</h2>
          </>
        )}
        {internalStep === 3 && (
          <>
            <h1 className="sync-title">בתוך האפליקציה</h1>
            <h2 className="sync-instruction">לחץ על 'סנכרן מכשיר'</h2>
          </>
        )}
        {internalStep === 4 && (
          <>
            <h1 className="sync-title">מצוין!</h1>
            <h2 className="sync-instruction">המכשיר מסונכרן כעת</h2>
          </>
        )}
      </div>

      <div className="sync-phone-container">
        
        <img 
          src={getCurrentImage()} 
          alt="Phone Screen" 
          className="sync-phone-img" 
        />
        
        {!showModal && internalStep === 1 && (
          <button className="blue-hotspot hub-icon-pos" onClick={handleHubClick}></button>
        )}
        {!showModal && internalStep === 2 && (
          <button className="blue-hotspot sync-btn-pos" onClick={handleDeviceClick}></button>
        )}
        {!showModal && internalStep === 3 && (
          <button className="blue-hotspot final-sync-pos" onClick={handleSyncClick}></button>
        )}

      </div>

      <button 
        className={`sync-nav-arrow back-arrow ${showModal ? 'disabled' : ''}`} 
        onClick={handleBackClick}
      >
        <img src={arrowIcon} alt="חזור" />
      </button>

      {internalStep === 4 && (
        <button 
          className={`sync-nav-arrow next-arrow ${showModal ? 'disabled' : ''}`} 
          onClick={handleNextClick}
        >
          <img src={arrowIcon} alt="הבא" />
        </button>
      )}

    </div>
  );
}
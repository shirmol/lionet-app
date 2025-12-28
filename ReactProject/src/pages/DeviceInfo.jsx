import React from "react";
import "./DeviceInfo.css"; 
import lockscreen from '../assets/lockscreen.png';
import arrowNext from '../assets/arrow-next.png';
import bluetooth from '../assets/bluetooth.jpg';
import charger from '../assets/charger.jpg';

export default function DeviceInfo({ onNext }) {
  return (
    <div className="page-device">
      <div className="device-layout">
        <div className="device-image" loading="eager" decoding="sync">
          <img src={lockscreen} alt="מסך נעילה של המכשיר" />
        </div>

        <div className="device-info">
          <h1 className="page-title">היכרות עם המכשיר</h1>

          <div className="info-list">
            <div className="info-row fade-item item-1">
              <span className="info-title">מכשיר</span>
              <span className="info-value">
                המכשיר <b>LioNet</b> הוא טלפון <b>Samsung Galaxy</b> שנעקר
                לשימוש צבאי ומכיל אפליקציות צבאיות ברמת סיווג
                <b> "שמור"</b>.
              </span>
            </div>
            <div className="info-row fade-item item-2">
              <span className="info-title">דגם</span>
              <span className="info-value">
                <b>Samsung Galaxy</b> (נרכש ע"י צה״ל)
              </span>
            </div>
            <div className="info-row fade-item item-3">
              <span className="info-title">אבטחה</span>
              <span className="info-value">
                המכשיר הוא אישי ובעל סיווג ביטחוני <b>״שמור״</b>.
              </span>
            </div>
            <div className="info-row fade-item item-4 special-row">
              <div className="text-content">
                <span className="info-title">חיבורים מוגבלים</span>
                <span className="info-value">
                  חל איסור מוחלט לחבר התקנים חיצוניים
                  <b> (Bluetooth / USB)</b>.
                  מותר לחבר <b>מטען ייעודי בלבד</b>.
                </span>
              </div>

              <div className="connection-icons">
                <div className="icon-bad">
                  <img src={bluetooth} alt="Bluetooth אסור" />
                </div>
                <div className="icon-good">
                  <img src={charger} alt="מטען מותר" />
                </div>
              </div>
            </div>

            {/* שורה 5: סלולר */}
            <div className="info-row fade-item item-6">
              <span className="info-title">פריסת סלולר</span>
              <span className="info-value">
                בגזרת איו״ש נתמך רק ע״י רשתות סלולריות ספציפיות
                <b> (Cellcom / Partner)</b>.
              </span>
            </div>

          </div>
        </div>
      </div>
      <button className="next-arrow" onClick={onNext}>
        <img src={arrowNext} alt="לעמוד הבא" />
      </button>
    </div>
  );
}
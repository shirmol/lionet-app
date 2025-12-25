import React, { useState } from 'react';
import './LionetHome.css'; 
import arrowIcon from '../assets/arrow-next.png';
import homeScreenImg from '../assets/LionetHome.png'; 

const appsData = {
    akela: { 
        title: "אקילה (Akela)", 
        description: "אפליקציה שמטרתה לנהל פעילויות עומק, כמו מעצרים, עליות אג\"מיות וסריקות אמל\"ח. דרכה ניתן למלא טפסים דיגיטליים למעצר." 
    },
    bluewolf: { 
        title: "זאב כחול", 
        description: "אפליקציה שמטרתה לסייע בבידוק אוכלוסייה ורכבים בשטח. המערכת מאפשרת, בין היתר, לבצע 'הצמדה' של רכב לנוסעים בו." 
    },
    alpha: { 
        title: "אלפא (Alpha)", 
        description: "אפליקציה שמטרתה לספק מפה מבצעית המציגה את מיקומי הכוחות בשטח. דרכה ניתן למלא דפי משימה ולדווח בזמן אמת." 
    },
    rocket: { 
        title: "רוקט צ'אט (Rocket.Chat)", 
        description: "אפליקציה שמטרתה לאפשר צ'אט מבצעי בין ליונטים. שימו לב שההיסטוריה נמחקת כל 30 יום. בקבוצת 'מנהלן' תמצאו סרטוני הדרכה." 
    },
    easytalk: { 
        title: "איזיטוק (EasyTalk)", 
        description: "אפליקציה שמטרתה לאפשר קשר מתפרץ (PTT). המערכת פועלת בסנכרון מלא מול מכשירי הקשר הרגילים." 
    },
    whitewolf: { 
        title: "להקת זאבים ", 
        description: "אפליקציה שמטרתה לנהל את המעברים באיו\"ש, לא כולל בקרה ורישום של כניסות ויציאות." 

    },
    wolfpack: { 
        title: "זאב לבן ", 
        description: "אפליקציה שמטרתה לנהל את המעברים באיו\"ש, כולל בקרה ורישום של כניסות ויציאות." 
    },
    fort: { 
        title: "FORT", 
        description: "אפליקציה שמטרתה לנהל את ההגדרות הכלליות של המכשיר שלך, כמו שינוי בהירות המסך, נעילת סיבוב ועוד." 
    },
    nx: { 
        title: "NXWitness", 
        description: "אפליקציה שמטרתה לספק חוזי (וידאו) בזמן אמת ממצלמות אבטחה של צמתים ונקודות עיקריות בגזרה." 
    },
    vpn: { 
        title: "VPN", 
        description: "אפליקציה שמטרתה לאפשר חיבור מאובטח לרשת הצבאית. חובה להפעיל לפני שימוש באפליקציות ." 
    },
    hub: { 
        title: "Hub", 
        description:"אפליקציה שבאמצעותה ניתן לעדכן את גרסאותיהם של האפליקציות במכשיר הליונט." 
    },
    deviceinfo: { 
        title: "Device Info Tracker", 
        description: "אפליקציה שמטרתה להציג מידע על סטטוס המכשיר, סוללה, וגרסאות תוכנה." 
    }
};

export default function LionetHome({ onNext, onBack }) {
  const [activeApp, setActiveApp] = useState(null);
  const closePopup = () => setActiveApp(null);

  return (
    <div className="lh-container">
      {activeApp && (
          <div className="lh-modal-overlay" onClick={closePopup}>
              <div className="lh-info-card" onClick={(e) => e.stopPropagation()}>
                  <button className="lh-card-close-btn" onClick={closePopup}>X</button>
                  <h2 className="lh-card-title">{appsData[activeApp]?.title}</h2>
                  <p className="lh-card-desc">{appsData[activeApp]?.description}</p>
                  <button 
                    className="lh-card-action-btn" 
                    onClick={() => {
                    }}
                  >
                      מעבר ללומדה של האפליקציה
                  </button>
              </div>
          </div>
      )}

      <div className="lh-text-area">
        <h1 className="lh-main-title">הגעתם למסך הבית של הליונט</h1>
        <h2 className="lh-sub-text">לחץ על אפליקציה למידע נוסף</h2>
      </div>
      <div className="lh-device-wrapper">
        <img src={homeScreenImg} alt="Lionet Home" className="lh-device-image" />
        <div className="lh-hotspot lh-pos-akela" onClick={() => setActiveApp('akela')}></div>
        <div className="lh-hotspot lh-pos-bluewolf" onClick={() => setActiveApp('bluewolf')}></div>
        <div className="lh-hotspot lh-pos-alpha" onClick={() => setActiveApp('alpha')}></div>
        <div className="lh-hotspot lh-pos-rocket" onClick={() => setActiveApp('rocket')}></div>
        <div className="lh-hotspot lh-pos-vpn" onClick={() => setActiveApp('vpn')}></div>
        <div className="lh-hotspot lh-pos-hub" onClick={() => setActiveApp('hub')}></div>
        <div className="lh-hotspot lh-pos-deviceinfo" onClick={() => setActiveApp('deviceinfo')}></div>
        <div className="lh-hotspot lh-pos-easytalk" onClick={() => setActiveApp('easytalk')}></div>
        <div className="lh-hotspot lh-pos-whitewolf" onClick={() => setActiveApp('whitewolf')}></div>
        <div className="lh-hotspot lh-pos-fort" onClick={() => setActiveApp('fort')}></div>
        <div className="lh-hotspot lh-pos-nx" onClick={() => setActiveApp('nx')}></div>
        <div className="lh-hotspot lh-pos-wolfpack" onClick={() => setActiveApp('wolfpack')}></div>
      </div>

      <button className="lh-arrow-btn lh-arrow-back" onClick={onBack}>
          <img src={arrowIcon} alt="חזור" />
      </button>
    </div>
  );
}
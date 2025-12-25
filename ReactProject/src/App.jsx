import { useState } from 'react';
import './App.css';
import lionetPhone from './assets/lionet-phone.png';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import DeviceInfo from "./pages/DeviceInfo";
import LockScreen from "./pages/LockScreen";
import Vpn from "./pages/Vpn";
import VpnPractice from "./pages/VpnPractice";
import SyncTutorial from './pages/SyncTutorial'; 
import SyncPractice from './pages/SyncPractice'; 
import AppCatalog from './pages/AppCatalog';
import AppCatalogPractice from './pages/AppCatalogPractice'; 
import LocationTutorial from './pages/LocationTutorial'; 
import LocationPractice from './pages/LocationPractice'; 
import LionetHome from './pages/LionetHome'; 

function App() {
  const [page, setPage] = useState("home");

  return (
    <> 
      {page === "home" && (
        <div className="app-root">
          <div className="logos-row">
            <img src={logo1} alt="logo1" className="logo" />
            <img src={logo2} alt="logo2" className="logo" />
            <img src={logo3} alt="logo3" className="logo" />
          </div>
          <div className="card">
            <img src={lionetPhone} alt="מכשיר LioNet" className="card-image"/>
            <h1 className="card-title"> לומדת מפעיל LIONET</h1>
            <p className="card-subtitle">לומדה זו תכשיר אותך בהפעלת מכשיר ה lionet.</p>
            <button className="card-button" onClick={() => setPage("device")}>התחל בהכשרה</button>
          </div>
        </div>
      )}

      {page === "device" && (
        <DeviceInfo onNext={() => setPage("lock")} />
      )}

      {page === "lock" && (
        <LockScreen 
          onNext={() => setPage("vpn")}     
          onBack={() => setPage("device")}  
        />
      )}

      {page === "vpn" && (
        <Vpn 
          onBack={() => setPage("lock")} 
          onNext={() => setPage("vpn-practice")} 
        />
      )}

      {page === "vpn-practice" && (
        <VpnPractice 
          onBack={() => setPage("vpn")} 
          onNext={() => setPage("sync")} 
        />
      )}

      {page === "sync" && (
        <SyncTutorial 
          onBack={() => setPage("vpn-practice")} 
          onNext={() => setPage("sync-practice")} 
        />
      )}

      {page === "sync-practice" && (
        <SyncPractice 
          onBack={() => setPage("sync")} 
          onNext={() => setPage("app-catalog")} 
        />
      )}

      {page === "app-catalog" && (
        <AppCatalog 
          onBack={() => setPage("sync-practice")} 
          onNext={() => setPage("app-catalog-practice")} 
        />
      )}

      {page === "app-catalog-practice" && (
        <AppCatalogPractice 
          onBack={() => setPage("app-catalog")} 
          onNext={() => setPage("location-tutorial")} 
        />
      )}

      {page === "location-tutorial" && (
        <LocationTutorial 
          onBack={() => setPage("app-catalog-practice")} 
          onNext={() => setPage("location-practice")} 
        />
      )}

      {page === "location-practice" && (
        <LocationPractice 
          onBack={() => setPage("location-tutorial")} 
          onNext={() => setPage("lionet-home")} 
        />
      )}
      {page === "lionet-home" && (
        <LionetHome 
          onBack={() => setPage("location-practice")} 
          onNext={() => alert("סיימת את החלק הזה בלומדה! כל הכבוד.")} 
        />
      )}

    </>
  );
}

export default App;
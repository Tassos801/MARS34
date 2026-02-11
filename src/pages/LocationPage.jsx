import ScannerLine from '../components/ScannerLine/ScannerLine';
import StatusDot from '../components/StatusDot/StatusDot';
import TerrainCanvas from '../components/TerrainCanvas/TerrainCanvas';
import TopoGraph from '../components/TopoGraph/TopoGraph';
import LocationSidebar from './LocationSidebar';
import './LocationPage.css';

export default function LocationPage() {
    return (
        <div className="location-layout">
            <div className="viz-container">
                <ScannerLine />
                <div className="overlay-elements">
                    <div className="loc-pill">
                        <StatusDot />
                        <span>MISSION BRIEFING // CONTACT</span>
                    </div>
                </div>
                <TerrainCanvas />
                <TopoGraph />
            </div>

            <LocationSidebar />
        </div>
    );
}

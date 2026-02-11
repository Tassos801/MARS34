import './ExplorerHUD.css';

export default function ExplorerHUD() {
    return (
        <div className="exploration-hud">
            <div className="coord-readout">
                <span>LAT: 18.65° N</span>
                <span>LONG: 226.2° E</span>
                <span className="scanning-text">SCANNING...</span>
            </div>
        </div>
    );
}

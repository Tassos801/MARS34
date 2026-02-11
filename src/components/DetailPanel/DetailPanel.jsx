import './DetailPanel.css';

export default function DetailPanel({ poi }) {
    return (
        <div className="detail-panel">
            <div className="detail-title">{poi.name}</div>
            <div className="stat-grid">
                <div className="stat-item">
                    <span>SCALE</span>
                    <div>{poi.elev}</div>
                </div>
                <div className="stat-item">
                    <span>REACH</span>
                    <div>{poi.diam}</div>
                </div>
                <div className="stat-item full-width">
                    <span>OVERVIEW</span>
                    <div>{poi.desc}</div>
                </div>
            </div>
        </div>
    );
}

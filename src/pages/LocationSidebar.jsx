import { useNavigate } from 'react-router-dom';
import MissionEntry from '../components/MissionEntry/MissionEntry';
import './LocationSidebar.css';

export default function LocationSidebar() {
    const navigate = useNavigate();

    return (
        <aside className="details-sidebar">
            <button className="btn-return" onClick={() => navigate('/home')}>
                ← BACK TO BASE
            </button>

            <header className="sidebar-header">
                <h1 className="loc-title">
                    Start a<br />Mission
                </h1>
                <div className="loc-meta">
                    <span>OPEN CHANNEL</span>
                    <span>NICOSIA 2026</span>
                </div>
            </header>

            <section className="section-block">
                <span className="section-label">Coordinates</span>
                <div className="loc-stat-grid">
                    <div className="loc-stat-item">
                        <span className="val">35.17°N</span>
                        <span className="lbl">Latitude</span>
                    </div>
                    <div className="loc-stat-item">
                        <span className="val">33.36°E</span>
                        <span className="lbl">Longitude</span>
                    </div>
                    <div className="loc-stat-item">
                        <span className="val">CY</span>
                        <span className="lbl">Territory</span>
                    </div>
                    <div className="loc-stat-item">
                        <span className="val">UTC+2</span>
                        <span className="lbl">Timezone</span>
                    </div>
                </div>
            </section>

            <section className="section-block">
                <span className="section-label">How We Work</span>
                <div className="history-timeline">
                    <MissionEntry
                        year="01"
                        name="Signal"
                        description="You reach out. We listen. A brief conversation to understand your vision, your market, and the problem worth solving."
                    />
                    <MissionEntry
                        year="02"
                        name="Decode"
                        description="We run your brief through our AI strategy engine — mapping competitive landscapes, audience signals, and creative opportunities."
                    />
                    <MissionEntry
                        year="03"
                        name="Launch"
                        description="Design, brand, campaign — delivered. AI-generated, human-curated. We move fast and build things that last."
                    />
                </div>
            </section>

            <section className="section-block no-border">
                <span className="section-label">Open a Channel</span>
                <p className="geo-text">
                    Ready to start? Send a transmission to <strong>hello@mars34.com</strong> or find us in Nicosia, Cyprus. We respond within 24 hours — Earth time.
                </p>
                <p className="geo-text" style={{ marginTop: '12px', color: 'var(--rust)' }}>
                    [NOW ACCEPTING MISSIONS]
                </p>
            </section>
        </aside>
    );
}

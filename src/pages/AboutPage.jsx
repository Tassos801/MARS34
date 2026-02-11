import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ScannerLine from '../components/ScannerLine/ScannerLine';
import StatusDot from '../components/StatusDot/StatusDot';
import InitGlobe from '../components/InitGlobe/InitGlobe';
import OrbitVisual from '../components/OrbitVisual/OrbitVisual';
import './AboutPage.css';

const STATUS_MSGS = [
    'ESTABLISHING HANDSHAKE',
    'DECRYPTING AGENCY MANIFESTO',
    'SYNCING CREATIVE COORDINATES',
    'INITIALIZING DESIGN ENGINE',
    'SYSTEMS NOMINAL // ALL CHANNELS OPEN',
];

const DIAG_ITEMS = [
    {
        label: 'AGENCY ID',
        value: 'MARS34 // AI DESIGN & ADVERTISING',
    },
    {
        label: 'ORIGIN',
        value: 'NICOSIA, CYPRUS // FOUNDED WEDNESDAY, 2026',
    },
    {
        label: 'DISCIPLINE',
        value: 'BRANDING · CAMPAIGNS · DESIGN SYSTEMS · AI STRATEGY',
    },
    {
        label: 'PHILOSOPHY',
        value: 'HUMAN VISION // MACHINE PRECISION',
    },
];

export default function AboutPage() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [statusMsg, setStatusMsg] = useState(STATUS_MSGS[0]);
    const [done, setDone] = useState(false);
    const progressRef = useRef(0);
    const rafRef = useRef(null);

    const tick = useCallback(() => {
        progressRef.current += Math.random() * 0.5;
        if (progressRef.current >= 100) {
            progressRef.current = 100;
            setProgress(100);
            setStatusMsg(STATUS_MSGS[STATUS_MSGS.length - 1]);
            setDone(true);
            return;
        }
        setProgress(progressRef.current);
        const idx = Math.min(
            Math.floor(progressRef.current / 20),
            STATUS_MSGS.length - 1
        );
        setStatusMsg(STATUS_MSGS[idx]);
        rafRef.current = requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [tick]);

    return (
        <div className="about-layout">
            <ScannerLine />
            <div className="about-globe-container">
                <InitGlobe />
            </div>
            <OrbitVisual />

            <div className="about-ui-overlay">
                <header className="about-header">
                    <div className="about-brand-pill">
                        <StatusDot />
                        <span>MARS34 // UPLINK ACTIVE</span>
                    </div>
                    <div className="about-brand-pill interactive" onClick={() => navigate('/home')}>
                        [ RETURN TO BASE ]
                    </div>
                </header>

                <main className="about-main-content">
                    <h1 className="about-init-title">
                        WHO WE<br />ARE
                    </h1>

                    <div className="about-progress-section">
                        <div className="about-progress-row">
                            <span className={`about-loading-text${done ? ' done' : ''}`}>
                                {statusMsg}
                            </span>
                            <span>
                                {String(Math.floor(progress)).padStart(2, '0')}%
                            </span>
                        </div>
                        <div className="about-progress-bar-container">
                            <div
                                className="about-progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="about-diagnostic-grid">
                        {DIAG_ITEMS.map((d) => (
                            <div className="about-diag-item" key={d.label}>
                                <div className="about-diag-label">{d.label}</div>
                                <div className="about-diag-value">{d.value}</div>
                            </div>
                        ))}
                    </div>
                </main>

                <footer className="about-footer">
                    <div>MARS34 // NICOSIA, CYPRUS // ESTD. 2026</div>
                    <div>V.1.0.0 // NOW ACCEPTING MISSIONS</div>
                </footer>
            </div>
        </div>
    );
}

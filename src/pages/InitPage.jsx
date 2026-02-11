import { useNavigate } from 'react-router-dom';
import ScannerLine from '../components/ScannerLine/ScannerLine';
import StatusDot from '../components/StatusDot/StatusDot';
import InitGlobe from '../components/InitGlobe/InitGlobe';
import OrbitVisual from '../components/OrbitVisual/OrbitVisual';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import DiagnosticGrid from '../components/DiagnosticGrid/DiagnosticGrid';
import './InitPage.css';

export default function InitPage() {
    const navigate = useNavigate();

    return (
        <div className="init-layout">
            <ScannerLine />
            <InitGlobe />
            <OrbitVisual />

            <div className="init-ui-overlay">
                <header className="init-header">
                    <div className="init-pill">
                        <StatusDot />
                        <span>MARS34 // SYSTEMS CONNECTING</span>
                    </div>
                    <div className="init-pill">
                        SIGNAL: LOCKED
                    </div>
                </header>

                <main className="init-main-content">
                    <h1 className="init-title">
                        MARS<br />34
                    </h1>

                    <ProgressBar onComplete={() => navigate('/home')} />

                    <DiagnosticGrid />
                </main>

                <footer className="init-footer">
                    <div>MARS34 AI MARKETING // ALL CHANNELS NOMINAL</div>
                    <div>V.1.0.0 // SYSTEMS INITIALIZING</div>
                </footer>
            </div>
        </div>
    );
}

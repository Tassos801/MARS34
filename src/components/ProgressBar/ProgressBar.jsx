import { useEffect, useState, useRef } from 'react';
import './ProgressBar.css';

const STATUS_MSGS = [
    'INITIALIZING NEURAL NETWORKS',
    'CALIBRATING AUDIENCE MODELS',
    'SYNCING CAMPAIGN ANALYTICS',
    'LOADING CREATIVE ENGINE',
    'SYSTEMS READY',
];

export default function ProgressBar({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [statusMsg, setStatusMsg] = useState(STATUS_MSGS[0]);
    const [done, setDone] = useState(false);
    const progressRef = useRef(0);

    useEffect(() => {
        let rafId;

        function tick() {
            progressRef.current += Math.random() * 0.5;
            if (progressRef.current >= 100) {
                progressRef.current = 100;
                setProgress(100);
                setStatusMsg('ALL SYSTEMS NOMINAL // CLICK TO LAUNCH');
                setDone(true);
                return;
            }
            setProgress(progressRef.current);
            const idx = Math.min(Math.floor(progressRef.current / 20), STATUS_MSGS.length - 1);
            setStatusMsg(STATUS_MSGS[idx]);
            rafId = requestAnimationFrame(tick);
        }

        rafId = requestAnimationFrame(tick);
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="progress-section">
            <div className="progress-info">
                <span className={`loading-text${done ? ' done' : ''}`}>{statusMsg}</span>
                <span>{String(Math.floor(progress)).padStart(2, '0')}%</span>
            </div>
            <div className="progress-bar-container">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            {done && (
                <button className="launch-btn" onClick={onComplete}>
                    [ ENTER MARS34 ]
                </button>
            )}
        </div>
    );
}

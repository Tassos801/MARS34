import { useNavigate } from 'react-router-dom';
import StatusDot from '../StatusDot/StatusDot';
import './ExplorerHeader.css';

export default function ExplorerHeader() {
    const navigate = useNavigate();

    return (
        <header className="explorer-header">
            <div className="explorer-brand-pill">
                <StatusDot />
                <span>MARS34 // SERVICES</span>
            </div>

            <div className="explorer-header-right">
                <span className="interactive" onClick={() => navigate('/home')}>
                    [ RETURN TO BASE ]
                </span>
                <span className="explorer-brand-pill">SCOPE: GLOBAL</span>
            </div>
        </header>
    );
}

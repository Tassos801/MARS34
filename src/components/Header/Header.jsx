import { useNavigate } from 'react-router-dom';
import StatusDot from '../StatusDot/StatusDot';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="site-header">
            <div className="brand-pill">
                <StatusDot />
                <span>MARS34 // CREATIVE AI</span>
            </div>

            <div className="brand-pill" style={{ gap: '20px' }}>
                <span className="interactive hover-underline" onClick={() => navigate('/about')}>
                    About
                </span>
                <span className="interactive hover-underline" onClick={() => navigate('/services')}>
                    Services
                </span>
                <span className="interactive hover-underline" onClick={() => navigate('/contact')}>
                    Contact
                </span>
            </div>
        </header>
    );
}

import { useNavigate } from 'react-router-dom';
import './Pill.css';

export default function Pill({ children, accent = false, href = '#', to = null }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (to) {
            e.preventDefault();
            navigate(to);
        }
    };

    return (
        <a
            href={to || href}
            className={`pill${accent ? ' accent' : ''}`}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}

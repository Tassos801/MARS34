import './MissionEntry.css';

export default function MissionEntry({ year, name, description }) {
    return (
        <div className="mission-entry">
            <span className="mission-year">{year}</span>
            <span className="mission-name">{name}</span>
            <p className="mission-desc">{description}</p>
        </div>
    );
}

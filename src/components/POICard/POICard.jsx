import './POICard.css';

export default function POICard({ sector, type, name, active, onClick }) {
    return (
        <div className={`poi-card${active ? ' active' : ''}`} onClick={onClick}>
            <p>{sector} // {type}</p>
            <h3>{name}</h3>
        </div>
    );
}

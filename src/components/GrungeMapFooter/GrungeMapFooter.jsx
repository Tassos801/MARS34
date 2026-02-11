import './GrungeMapFooter.css';

export default function GrungeMapFooter() {
    return (
        <div className="grunge-map">
            <div className="map-texture" />
            <div className="map-texture-2" />

            <div className="footer-content">
                <div>
                    MARS34<br />
                    NICOSIA, CYPRUS<br />
                    ESTD. 2026
                </div>
                <div className="coordinate-circle">
                    <div className="line-graphic" />
                </div>
                <div style={{ textAlign: 'right' }}>
                    THE SINGULARITY<br />
                    SEEMED CLOSER<br />
                    THAN EVER
                </div>
            </div>
        </div>
    );
}

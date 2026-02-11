import './HeroSection.css';

export default function HeroSection() {
    return (
        <main className="hero-main">
            {/* Left data block */}
            <div className="data-block data-tl">
                FOUNDED: WEDNESDAY, 2026<br />
                BASE: NICOSIA, CYPRUS<br />
                SIGNAL: AI-NATIVE<br />
                <br />
                [NOW ACCEPTING MISSIONS]
            </div>

            {/* Hero title */}
            <div className="hero-title-wrapper">
                <h1>MARS34</h1>
            </div>

            {/* Right data block */}
            <div className="data-block data-tr">
                DISCIPLINE: DESIGN + AI<br />
                OUTPUT: MULTI-FORMAT<br />
                REACH: GLOBAL<br />
                <br />
                [THE FUTURE IS BLURRY]
            </div>
        </main>
    );
}

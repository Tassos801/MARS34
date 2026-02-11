import GlobeCanvas from '../components/GlobeCanvas/GlobeCanvas';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import GrungeMapFooter from '../components/GrungeMapFooter/GrungeMapFooter';

export default function LandingPage() {
    return (
        <>
            {/* Hidden SVG noise filter for footer texture */}
            <svg style={{ display: 'none' }}>
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
            </svg>

            {/* Three.js background globe */}
            <GlobeCanvas />

            {/* UI layer on top */}
            <div className="ui-layer">
                <Header />
                <HeroSection />
                <GrungeMapFooter />
            </div>
        </>
    );
}

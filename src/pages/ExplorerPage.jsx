import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ScannerLine from '../components/ScannerLine/ScannerLine';
import ExplorerHeader from '../components/ExplorerHeader/ExplorerHeader';
import ExplorerGlobe from '../components/ExplorerGlobe/ExplorerGlobe';
import POICard from '../components/POICard/POICard';
import DetailPanel from '../components/DetailPanel/DetailPanel';
import ExplorerHUD from '../components/ExplorerHUD/ExplorerHUD';
import './ExplorerPage.css';

const SERVICES = {
    branding: {
        name: 'AI BRANDING',
        elev: 'FULL-STACK IDENTITY',
        diam: 'GLOBAL REACH',
        desc: 'Visual identity systems powered by generative AI. Strategy-first, pixel-perfect. From logo to language — we build brands that resonate in the age of machine intelligence.',
        rot: 0,
    },
    campaigns: {
        name: 'AD CAMPAIGNS',
        elev: 'MULTI-CHANNEL',
        diam: 'PREDICTIVE TARGETING',
        desc: 'Advertising driven by AI-powered audience modeling and real-time optimization. Every impression calculated, every creative asset generated to convert.',
        rot: 2.1,
    },
    systems: {
        name: 'DESIGN SYSTEMS',
        elev: 'SCALABLE INFRA',
        diam: 'RAPID DEPLOYMENT',
        desc: 'Scalable design infrastructure for brands that move fast in uncertain futures. Component libraries, tokens, and guidelines — built to evolve.',
        rot: 4.5,
    },
};

const SERVICE_CARDS = [
    { key: 'branding', sector: 'SERVICE 01', type: 'IDENTITY', buttonLabel: 'VIEW CASE STUDY' },
    { key: 'campaigns', sector: 'SERVICE 02', type: 'ADVERTISING', buttonLabel: 'VIEW CASE STUDY' },
    { key: 'systems', sector: 'SERVICE 03', type: 'INFRASTRUCTURE', buttonLabel: 'VIEW CASE STUDY' },
];

export default function ExplorerPage() {
    const navigate = useNavigate();
    const [activeService, setActiveService] = useState('branding');
    const [targetRotY, setTargetRotY] = useState(0);

    const handleServiceClick = useCallback((key) => {
        setActiveService(key);
        setTargetRotY(SERVICES[key].rot);
    }, []);

    const handleRotateLeft = useCallback(() => {
        setTargetRotY((prev) => prev - 0.5);
    }, []);

    const handleRotateRight = useCallback(() => {
        setTargetRotY((prev) => prev + 0.5);
    }, []);

    const handleCenter = useCallback(() => {
        setTargetRotY(0);
    }, []);

    return (
        <>
            <ScannerLine />
            <ExplorerGlobe targetRotY={targetRotY} />

            <div className="explorer-ui-layer">
                <ExplorerHeader />

                <main className="explorer-main">
                    <div className="sidebar">
                        {SERVICE_CARDS.map((card) => (
                            <POICard
                                key={card.key}
                                sector={card.sector}
                                type={card.type}
                                name={SERVICES[card.key].name}
                                buttonLabel={card.buttonLabel}
                                active={activeService === card.key}
                                onClick={() => handleServiceClick(card.key)}
                                onButtonClick={() => navigate('/work')}
                            />
                        ))}
                    </div>

                    <div className="explorer-center">
                        <div className="crosshair" />
                        <ExplorerHUD
                            onRotateLeft={handleRotateLeft}
                            onCenter={handleCenter}
                            onRotateRight={handleRotateRight}
                        />
                    </div>

                    <DetailPanel poi={SERVICES[activeService]} />
                </main>

                <footer className="explorer-footer">
                    <div>Creative Pipeline: active // throughput: continuous</div>
                    <div>Mars34 Intelligence Core // v.1.0.0</div>
                </footer>
            </div>
        </>
    );
}

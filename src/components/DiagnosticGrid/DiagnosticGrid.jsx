import './DiagnosticGrid.css';

const DIAGNOSTICS = [
    {
        label: 'AGENCY ID',
        value: 'MARS34 // AI DESIGN & ADVERTISING',
    },
    {
        label: 'STRATEGY ENGINE',
        value: 'GPT-DRIVEN TARGETING // REAL-TIME OPTIMIZATION',
    },
    {
        label: 'CREATIVE PAYLOAD',
        value: 'GENERATIVE ASSETS // MULTI-FORMAT DELIVERY',
    },
    {
        label: 'ANALYTICS CORE',
        value: 'PREDICTIVE ROI // LIVE DASHBOARD READY',
    },
];

export default function DiagnosticGrid() {
    return (
        <div className="diagnostic-grid">
            {DIAGNOSTICS.map((d) => (
                <div className="diag-item" key={d.label}>
                    <div className="diag-label">{d.label}</div>
                    <div className="diag-value">{d.value}</div>
                </div>
            ))}
        </div>
    );
}

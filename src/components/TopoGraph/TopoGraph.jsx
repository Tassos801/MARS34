import './TopoGraph.css';

export default function TopoGraph() {
    return (
        <div className="topo-grid">
            <span className="topo-title">CROSS-SECTION ELEVATION [KM]</span>
            <div className="topo-line">
                <div className="topo-graph" />
            </div>
            <div className="topo-line" />
            <div className="topo-line" />
            <div className="topo-line" />
            <div className="topo-labels">
                <span>WEST RIM</span>
                <span>SUMMIT</span>
                <span>EAST RIM</span>
            </div>
        </div>
    );
}

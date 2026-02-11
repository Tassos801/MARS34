import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './TerrainCanvas.css';

const terrainVertex = `
  varying vec2 vUv;
  varying float vHeight;
  void main() {
    vUv = uv;
    float dist = distance(uv, vec2(0.5));
    float height = exp(-pow(dist * 5.0, 2.0)) * 3.5;
    vHeight = height;
    vec3 pos = position;
    pos.z += height;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const terrainFragment = `
  uniform vec3 colorPaper;
  uniform vec3 colorRust;
  uniform vec3 colorInk;
  varying vec2 vUv;
  varying float vHeight;

  void main() {
    vec3 color = mix(colorPaper, colorRust, vHeight * 0.3);

    // Topographic contour lines
    float contour = mod(vHeight * 10.0, 1.0);
    if (contour > 0.95) {
      color = mix(color, colorInk, 0.2);
    }

    // Grid lines
    if (mod(vUv.x * 20.0, 1.0) > 0.98 || mod(vUv.y * 20.0, 1.0) > 0.98) {
      color = mix(color, colorInk, 0.05);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function TerrainCanvas() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xE6E2D6);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 5, 10);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(12, 12, 128, 128);
        const material = new THREE.ShaderMaterial({
            vertexShader: terrainVertex,
            fragmentShader: terrainFragment,
            uniforms: {
                colorPaper: { value: new THREE.Color('#E6E2D6') },
                colorRust: { value: new THREE.Color('#C85228') },
                colorInk: { value: new THREE.Color('#121212') },
            },
        });

        const terrain = new THREE.Mesh(geometry, material);
        terrain.rotation.x = -Math.PI / 2;
        scene.add(terrain);

        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            terrain.rotation.z += 0.0015;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div className="terrain-canvas" ref={containerRef} />;
}

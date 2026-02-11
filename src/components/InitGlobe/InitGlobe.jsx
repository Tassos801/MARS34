import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './InitGlobe.css';

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  varying vec3 vNormal;
  varying vec3 vPosition;

  float hash(float n) { return fract(sin(n) * 43758.5453123); }
  float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+0.0), hash(n+1.0),f.x),
                   mix( hash(n+57.0), hash(n+58.0),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
  }

  void main() {
    float n = noise(vPosition * 1.5 + time * 0.1);
    vec3 color = vec3(0.78, 0.32, 0.16);
    if(n < 0.4) color = vec3(0.9, 0.88, 0.84);
    if(n > 0.7) color = vec3(0.16, 0.35, 0.26);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function InitGlobe() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const uniforms = { time: { value: 0 } };
        const sphere = new THREE.Mesh(
            new THREE.IcosahedronGeometry(3.5, 4),
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms,
                wireframe: true,
            })
        );
        scene.add(sphere);

        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            uniforms.time.value += 0.005;
            sphere.rotation.y += 0.002;
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
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div className="init-globe" ref={containerRef} />;
}

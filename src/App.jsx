import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExplorerPage from './pages/ExplorerPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import InitPage from './pages/InitPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/services" element={<ExplorerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

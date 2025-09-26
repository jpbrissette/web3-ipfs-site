import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

/**
 * The main application component.
 * It sets up the main layout, navigation, and routing for the application.
 *
 * @returns {JSX.Element} The main application component.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 bg-gray-800 flex justify-between">
        <Link to="/" className="font-bold">Web3 IPFS Site</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

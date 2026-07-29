import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Garden } from './pages/Garden';
import { Work } from './pages/Work';
import { Pricing } from './pages/Pricing';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

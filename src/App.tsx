import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/primitives/ScrollProgress';
import { Scene0 } from './scenes/Scene0';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { SceneGallery } from './scenes/SceneGallery';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';
import { Scene6 } from './scenes/Scene6';
import { Scene7 } from './scenes/Scene7';

function App() {
  return (
    <main className="relative min-h-screen bg-brand-950 text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Scene0 />
      <Scene2 />
      <Scene3 />
      <SceneGallery />
      <Scene4 />
      <Scene5 />
      <Scene6 />
      <Scene7 />
    </main>
  );
}

export default App;

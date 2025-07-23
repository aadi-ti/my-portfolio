import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProjectsTabs from './components/ProjectTabs';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import SkillsShuffle from './components/Skills';
import AppWrapper from './components/App';

function App() {
  return (
    <div className="min-h-screen bg-[#1e1f1e]">
      <NavBar/>
      <AppWrapper>
      <HeroSection />
      <ProjectsTabs/>
      {/* <Resume/> */}
      <SkillsShuffle/>
      </AppWrapper>
      <Footer/>
    </div>
  );
}

export default App;
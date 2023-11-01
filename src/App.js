import './App.css';
import PiektaisUzd from './components/PiektaisUzd';
import PirmaisJaut  from './components/PirmaisJaut.js';
import OtraisJaut from './components/OtraisJaut.js';

function App() {
  return (
    <main className="App-header">
        <PirmaisJaut/>
        <OtraisJaut/>
    
        
        <PiektaisUzd/>
    </main>
  );
}

export default App;
 
import './App.css';
import PiektaisUzd from './components/PiektaisUzd';
import PirmaisJaut  from './components/PirmaisJaut.js';
import OtraisJaut from './components/OtraisJaut.js';
import Ralfs from './components/Ralfs.jsx';
function App() {
  return (
    <main className="App-header">
        <PirmaisJaut/>
        <OtraisJaut/>
        <Ralfs/>
        <PiektaisUzd/>
    </main>
  );
}

export default App;
 
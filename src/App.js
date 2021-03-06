import './App.css';
import Header from './Header';
import TinderCards from './TinderCard';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;

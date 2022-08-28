
import RupeeContainer from './components/RupeeContainer';
import HeartsContainer from './components/HeartsContainer';

const  App = () => {
  return (
    <div className="app-container">
      <header className="header-container">
        <HeartsContainer />
        <h1>Inventory</h1>
        <RupeeContainer />
      </header>
      <div>

      </div>
      <footer></footer>
    </div>
  );
}

export default App;

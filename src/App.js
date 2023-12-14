import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Hookse } from './hooks/Hooks';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <Hookse/>
      </header>
    </div>
  );
}

export default App;

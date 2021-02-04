import './App.css';
import AddWorkout from './components/AddWorkout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get-Franked</h1>
        <p>Let's see them gains!</p>
      </header>
      <div className="container">
        <AddWorkout/>
      </div>
    </div>
  );
}

export default App;

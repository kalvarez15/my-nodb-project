import './App.css';
import AddWorkout from './components/AddWorkout';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get-Franked</h1>
        <p>Let's see them gains!</p>
      </header>
      <div className="container">
        <AddWorkout/>
        <Workouts/>
      </div>
    </div>
  );
}

export default App;

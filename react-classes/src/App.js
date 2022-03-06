import './App.css';
import Counter from './Counter.js';
import Counter2 from './Counter2.js';
function App() {
  return (
    <div className="App">
      <h1>Class component</h1>
      <Counter></Counter>
      
      <h1>Functional component</h1>
      <Counter2></Counter2>
    </div>
  );
}

export default App;

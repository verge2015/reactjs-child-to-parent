import './App.css';
import Parent from './components/Parent';

function App() {
  return (
    <div className='App-Header'>
    <center>
      <h1>Pass Value from Child to Parent using Callback</h1>
      <Parent/>
    </center>
    </div>
  );
}

export default App;

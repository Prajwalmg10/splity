import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path='/' />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

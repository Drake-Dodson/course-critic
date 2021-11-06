import './App.css';
import './pages/Metrics';
import Metrics from './pages/Metrics';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/' />
        </Switch>
        <Metrics/>
      </Router>
    </div>
  );
}

export default App;

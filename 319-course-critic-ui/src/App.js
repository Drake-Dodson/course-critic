import './App.css';
import './pages/Metrics';
import Metrics from './pages/Metrics';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;

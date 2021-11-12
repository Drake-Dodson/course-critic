import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssignmentFeed from './pages/AssignmentFeed';
import AssignmentDiscussion from './pages/AssignmentDiscussion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<AssignmentFeed />}></Route>
        <Route path='/assignmentdiscussion' element={<AssignmentDiscussion />}></Route>

      </Routes>
    </Router>
=======
import './pages/Metrics';
import Sidebar from './components/Sidebar/Sidebar';
import Classes from './pages/Classes';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/classes' element={<Classes />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
>>>>>>> aa57cfe02182cd09d3db5cbd046f4d9ca3ac5ec7
  );
}

export default App;

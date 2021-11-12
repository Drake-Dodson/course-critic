import './App.css';
import './pages/Metrics';
import Sidebar from './components/Sidebar/Sidebar';
import Classes from './pages/Classes';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssignmentFeed from './pages/AssignmentFeed';
import AssignmentDiscussion from './pages/AssignmentDiscussion';


function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/classes' element={<Classes />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/assignmentfeed' element={<AssignmentFeed />}></Route>
          <Route path='/assignmentdiscussion' element={<AssignmentDiscussion />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css';
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
  );
}

export default App;

import './App.css';
import './pages/Metrics';
import Sidebar from './components/Sidebar/Sidebar';
import Classes from './pages/Classes';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssignmentFeed from './pages/AssignmentFeed';
import AssignmentDiscussion from './pages/AssignmentDiscussion';
import CreateReview from './pages/CreateReview';
import ReviewSubmitted from './pages/ReviewSubmitted';
import CourseReviews from './pages/CourseReviews';
import CourserMetricsPage from './pages/CourserMetricsPage';
import WriteADiscussionPostPage from './pages/WriteADiscussionPostPage';
import UserFeed from './pages/UserFeed';
import WriteDiscussionReply from './pages/WriteDiscussionReply';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/classes' element={<Classes />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/assignmentfeed' element={<AssignmentFeed />}></Route>
          <Route path='/assignmentdiscussion' element={<AssignmentDiscussion />}></Route>
          <Route path='/creatediscussionpost' element={<WriteADiscussionPostPage />}></Route>
          <Route path='/create_review' element={<CreateReview />}></Route>
          <Route path='/review_submitted' element={<ReviewSubmitted />}></Route>
          <Route path='/reviews' element={<CourseReviews />}></Route>
          <Route path='/creatediscussionreply' element={<WriteDiscussionReply />}></Route>
          <Route path='/pages/CourserMetricsPage' element={<CourserMetricsPage />}></Route>
          <Route path='/pages/WriteADiscussionPostPage' element={<WriteADiscussionPostPage />}></Route>
        </Routes>
        <Sidebar/>
      </Router>
    </>
  );
}

export default App;

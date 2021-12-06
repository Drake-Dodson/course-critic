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
import CourseMetricsPage from './pages/CourseMetricsPage';
import WriteADiscussionPostPage from './pages/WriteADiscussionPostPage';
import UserFeed from './pages/UserFeed';
import WriteDiscussionReply from './pages/WriteDiscussionReply';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/assignmentfeed' element={<AssignmentFeed/>}/>
          <Route path='/assignmentdiscussion' element={<AssignmentDiscussion/>}/>
          <Route path='/creatediscussionpost' element={<WriteADiscussionPostPage/>}/>
          <Route path='/create_review' element={<CreateReview/>}/>
          <Route path='/review_submitted' element={<ReviewSubmitted/>}/>
          <Route path='/reviews' element={<CourseReviews/>}/>
          <Route path='/creatediscussionreply' element={<WriteDiscussionReply/>}/>
          <Route path='/pages/CourseMetricsPage' element={<CourseMetricsPage/>}/>
          <Route path='/pages/WriteADiscussionPostPage' element={<WriteADiscussionPostPage/>}/>
        </Routes>
        <Sidebar/>
      </Router>
    </>
  );
}

export default App;

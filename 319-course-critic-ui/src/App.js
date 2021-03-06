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
import UserReviews from "./pages/UserReviews";
import LogIn from './pages/LogIn';
import {StaticBackend} from "./repositories/StaticBackend";
import {useState} from "react";
import SignUpPage from "./pages/SignUp";

function App() {
  StaticBackend.intializeRepos();

  const [sidebarEnabled, setSidebarEnable] = useState(true);
  const enableSidebar = () => setSidebarEnable(true);
  const disableSidebar = () => setSidebarEnable(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/class/:classID' element={<Classes/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/class/:classID/assignments' element={<AssignmentFeed/>}/>
          <Route path='/class/:classID/assignments/discussion'  element={<AssignmentDiscussion/>}/>
          <Route path='/class/:classID/assignments/discussion/create' element={<WriteADiscussionPostPage/>}/>
          <Route path='/class/:classID/review' element={<CreateReview/>}/>
          <Route path='/class/:classID/review_submitted' element={<ReviewSubmitted/>}/>
          <Route path='/class/:classID/reviews/' element={<CourseReviews/>}/>
          <Route path='/user/reviews/' element={<UserReviews/>}/>
          <Route path='/class/:classID/assignments/discussion/reply' element={<WriteDiscussionReply/>}/>
          <Route path='/class/:classID/metrics'  element={<CourseMetricsPage/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
        {/*<Sidebar*/}
        {/*  login={false}*/}
        {/*/>*/}
      </Router>
    </>
  );
}

export default App;

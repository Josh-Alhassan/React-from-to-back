import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import { icons } from 'react-icons/lib';

import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import AboutIconLink from './component/AboutIconLink';
import FeedbackData from './data/FeedbackData';
import AboutPage from './Pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats />
                <FeedbackList handleDelete = {deleteFeedBack} />
              </>
            } >   
            </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

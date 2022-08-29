import { useState } from 'react';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import { icons } from 'react-icons/lib';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedBack} />
      </div>
    </>
  );
}

export default App;

import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from "react";

const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is item One:',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is Item Two:',
            rating: 7,
        },
        {
            id: 3,
            text: 'This is Item three:',
            rating: 8,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })



    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedBack = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !==id))
        }
      }

    // Edit function Item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    
    return (
        <FeedbackContext.Provider value = {{
            feedback,
            deleteFeedBack,
            addFeedback,
            editFeedback,
        }}
        > {children} </FeedbackContext.Provider>
    )
}

export default FeedbackContext
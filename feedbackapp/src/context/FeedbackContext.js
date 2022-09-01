import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    })

    // Fetch Feedback
    const fetchFeedback = async() => {
        const response = await fetch(`http://localhost:5000/feedbck?_sort=id&_order=desc`)
        // const response = await fetch(`https://5000-saintjosh-reactfromtoba-44n581l8uh5.ws-eu63.gitpod.io/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

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

    // Update feedback Item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }
    
    return (
        <FeedbackContext.Provider value = {{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedBack,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}
        > {children} </FeedbackContext.Provider>
    )
}

export default FeedbackContext
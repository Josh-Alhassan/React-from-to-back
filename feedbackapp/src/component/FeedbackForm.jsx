import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';

function FeedbackForm() {
    const [text, setText] = useState('')

    const handTextChange = (e) => {
        setText(e.target.value);
    }
  return (
    <Card>
        <h2>How would you rate your service with us?</h2>
        {/* @todo = rating select Component */}
        <div className="input-group">
            <input 
                onChange={handTextChange}
                type="text"
                placeholder='Write a review'
                value={text} 
            />
            <button type="submit">Send</button>
        </div>
    </Card>
  ) 
}

export default FeedbackForm
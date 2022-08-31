import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10);
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    return (
        <ul className='rating'>
            <li>
                <input
                    type="radio"
                    value="1"
                    id='num1'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 1} 
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="2"
                    id='num2'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 2} 
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="3"
                    id='num3'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 3} 
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="4"
                    id='num4'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 4} 
                />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="5"
                    id='num5'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 5} 
                />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="6"
                    id='num6'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 6} 
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="7"
                    id='num7'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 7} 
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="8"
                    id='num8'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 8} 
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="9"
                    id='num9'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 9} 
                />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input
                    type="radio"
                    value="10"
                    id='num10'
                    name='rating'
                    onChange={handleChange}
                    checked={selected === 10} 
                />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    )
}

export default RatingSelect
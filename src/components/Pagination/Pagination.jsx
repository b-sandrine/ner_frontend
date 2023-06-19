import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import './Pagination.css'
import { useState } from 'react'

const Pagination = () => {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className="pagination--container">
            <HiArrowCircleLeft size={20} onClick={decreaseCount} />
            <ul>
                <li>{count}</li>
            </ul>
            <HiArrowCircleRight size={20} onClick={increaseCount} />
        </div>
    )
}

export default Pagination;
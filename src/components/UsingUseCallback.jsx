import React, { useCallback, useState } from 'react'

const Buttons = ({ increment, decrement, count }) => {
    return (
        <div className="btn-group">
            <button className='btn btn-info btn-sm' onClick={decrement}>-</button>
            <button className='btn btn-danger btn-sm'>{count}</button>
            <button className='btn btn-info btn-sm' onClick={increment}>+</button>
        </div>
    )
}

const UsingUseCallback = () => {

    const [count, setCount] = useState(0)

    const increment = useCallback(() => setCount(count + 1))
    const decrement = useCallback(() => setCount(count - 1))

    return (
        <>
            <Buttons increment={increment} decrement={decrement} count={count} />
        </>
    )
}

export default UsingUseCallback
import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const reducerStudent = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload }
        case 'lastname':
            return { ...state, lastname: action.payload }
        default:
            return state;
    }
}


const UsingUseReducer = () => {

    const [user, setUser] = useState({
        name: '',
        lastname: ''
    })

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const [student, dispatchStudent] = useReducer(reducerStudent, {
        name: '',
        lastname: '',
    })

    return (
        <>
            <div>UsingUseReducer</div>
            {/* Usando la variable de estado directamente */}
            <input type="text" placeholder='Insert Name' onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input type="text" placeholder='Insert Lastname' onChange={(e) => setUser({ ...user, lastname: e.target.value })} />

            {/* Usando el estado actual */}
            <input type="text" placeholder='Insert Name' onChange={(e) => setUser((prevState) => ({ ...prevState, name: e.target.value }))} />
            <input type="text" placeholder='Insert Lastname' onChange={(e) => setUser((prevState) => ({ ...prevState, lastname: e.target.value }))} />

            {/* Usuando reducer */}
            <p>Count: {state.count}</p>
            <button className='btn btn-primary btn-sm' onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
            <button className='btn btn-danger btn-sm' onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>

            {/* Usando reducer */}
            <input type="text" placeholder='Insert Name' onChange={(e) => dispatchStudent({ type: 'name', payload: e.target.value })} />
            <input type="text" placeholder='Insert Lastname' onChange={(e) => dispatchStudent({ type: 'lastname', payload: e.target.value })} />
        </>
    )
}

export default UsingUseReducer
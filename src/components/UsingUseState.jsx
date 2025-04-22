import React, { useState } from 'react'

const UsingUseState = () => {

    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const [nombres, setNombres] = useState([
        "Hugo", "Paco", "Luis"
    ])

    return (
        <>
            <h4>Usando useState:</h4>
            <p>Counter: {count}</p>
            <button className='btn btn-primary btn-sm' onClick={() => {
                setCount(count + 1)
            }}>
                Incrementar
            </button>


            <div className='container'>
                <label>
                    <input type="checkbox" onClick={() => {
                        setShow(!show)
                    }} /> Mostrar
                </label>

                {
                    show && (
                        <p>Mostrando Elemento Oculto</p>
                    )
                }
            </div>

            <div className="container">
                <ul className="list-group">
                    {
                        nombres.map((item, index) => {
                            return (
                                <li key={index} className='list-group-item'>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default UsingUseState
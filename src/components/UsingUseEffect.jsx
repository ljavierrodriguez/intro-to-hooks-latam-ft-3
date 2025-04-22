import React, { useEffect, useState } from 'react'

const ComponenteA = () => {

    const [nombre, setNombre] = useState("")

    useEffect(() => {
        // componentDidMount
        console.log("Componente Renderizado...")
        
        return () => {
            // componentWillUnmount()
            console.log("Componente Eliminado...")
        }

    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Componente Actualizado...")

    }, [nombre])

    return (
        <h1>Componente A</h1>
    )
}

const UsingUseEffect = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <button className='btn btn-secondary btn-sm'
                onClick={() => setShow(!show)}
            >{show ? "Ocultar" : "Mostrar"}</button>

            {
                show && (
                    <ComponenteA />
                )
            }
        
        </>
    )
} 

export default UsingUseEffect


class Componente {

    componentDidMount(){
        // anted de renderizar el componente
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }


    render(){
        return (
            <h1>Valor A</h1>
        )
    }
}
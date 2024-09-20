import { React, useState } from 'react'

const Count = ({ inicial, incremento }) => {
    // primer state
    const [contador, setContador] = useState(inicial)

    // funcion para disminuir el contador
    const disminuir = () => {
        if (contador === 0) {
            return
        }

        setContador(contador - incremento)
    }

    // funcion para aumentar el contador
    const aumentar = () => {
        setContador(contador + incremento)
    }

    // resetear el contador
    const reset = () => {
        setContador(inicial)
    }

    return (
        <>
            <p>
                <h1>{contador}</h1>

                <div className="grid grid-cols-3 gap-4 mt-6">
                    <button onClick={disminuir} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
                    <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">c</button>
                    <button onClick={aumentar} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">+</button>
                </div>
            </p>
        </>
    )
}

export default Count
import React from 'react'

export const Card = ({ data, handleCounterPlus, handleCounterLess }) => {
    const { name, sprites } = data;
    return (
        <div className='flex flex-col h-screen items-center justify-center gap-5'>
            <div className='shadow-cyan-500 shadow-2xl rounded-xl transition-transform hover:scale-105 duration-300'>
                <img className='w-full max-w-xs rounded-xl mx-auto' src={sprites.other["official-artwork"].front_default} alt={name} />
                <h1 className='text-5xl md:capitalize text-center mb-4'>{name}</h1>
            </div>
            <div className='flex flex-row gap-32 mt-7'>
                <button onClick={handleCounterLess} className='text-2xl text-center border p-2 rounded-md hover:scale-105 duration-200 shadow-2xl shadow-cyan-500 cursor-pointer'>Anterior</button>
                <button onClick={handleCounterPlus} className='text-2xl text-center border p-2 rounded-md hover:scale-105 duration-200 shadow-2xl shadow-cyan-500 cursor-pointer'>Siguiente</button>
            </div>
        </div>
    )
}

import React from 'react'

export const Loading = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-9xl inline-block whitespace-nowrap overflow-hidden border-r-2 border-black' style={{
                    width: '0',
                    animation: 'typing 4s steps(30, end) forwards, blink 0.75s step-end infinite'
                }}>Loading...</h1>
            </div>
        </>
    )
}

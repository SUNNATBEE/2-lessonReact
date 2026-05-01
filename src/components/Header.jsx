import React from 'react'

const Header = () => {


    const randomNumber = Math.round(Math.random() * 100)

    return (
        <div>

           
                <strong>{randomNumber}</strong>

                <h1 className='bg-red-600 text-9xl text-center'>Deploy to Vercel</h1>
                

                
                {randomNumber % 2 === 0 ? "Juft son" : "Toq Son"}
           

        </div>
    )
}

export default Header
import React from 'react'

export default function Joke({name, handleClick}) {
    return (
        <div>
            <p className="joke" onClick={handleClick}>{name}</p>
        </div>
    )
}

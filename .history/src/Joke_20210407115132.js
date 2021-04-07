import React from 'react'

export default function Joke({name, handleClick}) {
    return (
        <div>
            <p className="joke">{name}</p>
        </div>
    )
}

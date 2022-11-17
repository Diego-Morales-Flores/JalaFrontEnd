import React from 'react'

export default function Input(props) {
    return (
        <div>
            <label htmlFor={props.label}>{props.label}:</label>
            <input name={props.label} type="text" value={props.value} onChange={(e) => props.set(e.target.value)} />
        </div>
    )
}

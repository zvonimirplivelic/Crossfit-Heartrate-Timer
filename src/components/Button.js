import React from 'react';

let button = (props) => {
    return (
        <button className = "Button"
                onClick = {props.startTimer}>Start Timer
        </button>
    )
}

export default button;
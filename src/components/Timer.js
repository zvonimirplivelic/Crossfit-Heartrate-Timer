import React from 'react'

let timer = (props) => {

    let setTimerMinutes = () => {
        let minutes = Math.floor(props.workTime / 60)

        if(minutes < 10) {
            minutes = '0' + minutes
        }

        return minutes
    }

    let setTimerSeconds = () => {
        let seconds = props.workTime % 60

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        return seconds
    }

    return (
        <div className="Timer">
            {setTimerMinutes()} : {setTimerSeconds()}
        </div>
    )
}

export default timer
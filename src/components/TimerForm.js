import React from 'react';

let timerForm = (props) => {
    return (
        <div className= "TimerForm">
            <form>
                <label>
                Work Time:
                <input  
                    type="number" required
                    name="workTime"
                    value={props.workTime}
                    onChange={props.handleChange}/>
                min
                </label>
            </form>            
        </div>
        )
}

export default timerForm;
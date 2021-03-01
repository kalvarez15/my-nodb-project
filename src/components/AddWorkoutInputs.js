import React from 'react';

class AddWorkoutInputs extends React.Component {
    constructor() {
        super()
        this.state = {
            weight: '',
            reps: '',
            wokoutType: ''
        }
    } 
    

    handleWeight = (event) => {
        this.state({
            weightInput: event.target.value
        })
    }

    handleReps = (event) => {
        this.state({
            repsInput: event.target.value
        })
    }

    handleWorkoutType = (event) => {
        this.state({
            workoutTypeInput: event.target.value
        })
    }
    render() {
        return(<div> 
            <input/>
            <input/>
            <input/>
            <button>Add Workout</button>
        </div>)
    }
}

export default AddWorkoutInputs
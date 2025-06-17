import React, { useState } from 'react'
import { workoutProgram as training_plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx';

export default function Grid(){
    const isLocked = true
    const selectedWorkout = 5
    const [restActivity, setRestActivity] = useState('rest')
    const cycle = [
                    'Upper Body',  // day%7 === 0
                    'Lower Body',  // day%7 === 1
                    'Rest',        // day%7 === 2
                    'Upper Body',  // day%7 === 3
                    'Lower Body',  // day%7 === 4
                    'Rest',        // day%7 === 5
                    'Rest'         // day%7 === 6
                    ]
    return(
        <div>
            <div className="mb-6">
                <label className="block mb-2 font-semibold">
                On rest days I want to work on:
                </label>
                <select
                className="p-2 border rounded"
                value={restActivity}
                onChange={e => setRestActivity(e.target.value)}
                >
                <option value="rest">Rest</option>
                <option value="cardio">Cardio</option>
                <option value="plyometrics">Plyometrics</option>
                </select>
            </div>
            <div className="workout-grid-plan">
                {Object.keys(training_plan).map((workout, workoutIndex)=>{
                    
                    const type = cycle[ workoutIndex % cycle.length ];
                    const trainingPlan = training_plan[workoutIndex];
                    const dayNum = ((workoutIndex/8) <= 1) ? '0' + (workoutIndex + 1) : workoutIndex + 1;
                    const icon = type === 'Upper Body' ? (
                                    <i className='fa-solid fa-dumbbell'></i>
                                ) :(
                                    type === 'Lower Body' ? (
                                        <i className='fa-solid fa-weight-hanging'></i>
                                    ) : (
                                        <i className='fa-solid fa-person-walking'></i>
                                    )
                                )
                            

                    if (workoutIndex === selectedWorkout) {
                        return(
                            <WorkoutCard key={workoutIndex} trainingPlan={trainingPlan} type={type} workoutIndex={workoutIndex} dayNum={dayNum} icon={icon} restActivity={restActivity} />
                        )
                    }

                    return (
                        <button className={''+(isLocked ? 'inactive styling' : 'active styling')} key={workoutIndex}>
                            <div className='plan-card-header'>
                                <p>Day {dayNum}</p>
                            </div>
                            {isLocked ? (
                                <i className='fa-solid fa-lock'></i>
                            ) : (icon)}
                            <div className='plan-card-header'>
                                <h4><b>{type}</b></h4>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
}
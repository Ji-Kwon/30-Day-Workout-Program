import { workoutProgram as training_plan } from '../utils/index.js'

export default function Grid(){
    const isLocked = true;
    
    return(
        <div className="workout-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex)=>{
                const cycle = [
                'Upper Body',  // day%7 === 0
                'Lower Body',  // day%7 === 1
                'Rest',        // day%7 === 2
                'Upper Body',  // day%7 === 3
                'Lower Body',  // day%7 === 4
                'Rest',        // day%7 === 5
                'Rest'         // day%7 === 6
                ];
                const type = cycle[ workoutIndex % cycle.length ];

                return (
                    <button key={workoutIndex}>
                        <div className='plan-card-header'>
                            <p>Day {((workoutIndex/8) <= 1) ? '0' + (workoutIndex + 1) : workoutIndex + 1}</p>
                        </div>
                        {isLocked ? (
                            <i className='fa-solid fa-lock'></i>
                        ) : (
                            workoutIndex % 3 === 0 ?(
                                <i className='fa-solid fa-dumbbell'></i>
                            ) :(
                                workoutIndex % 3 === 1 ? (
                                    <i className='fa-solid fa-weight-hanging'></i>
                                ) : (
                                    <i className='fa-solid fa-person-walking'></i>
                                )
                            )
                        )}
                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    );
}
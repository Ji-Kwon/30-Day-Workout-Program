import React from "react";
import Modal from "./Modal";

export default function WorkoutCard(props) {
  const {
    trainingPlan,
    workoutIndex,
    type,
    dayNum,
    icon,
    restActivity
  } = props;

  const isRestOnly = workoutIndex % 7 === 2;
  const { workout, plyometrics, cardio} = trainingPlan || {};

  const showExerciseDescription = {name: ' ', description: ' '}

  return (
    <div className="workout-container">
    <Modal showExerciseDescription={showExerciseDescription}/>
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNum}</p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2><b>{type}</b></h2>
        </div>
      </div>

      <div className="workout-grid">
        {type !== 'Rest' ? (
          <div>
            <div className="exercise-name">
              <h4>Workout</h4>
            </div>
            <h6>Sets</h6>
            <h6>Goal Reps</h6>
            {workout.map((ex, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="exercise-name">
                    <p>{i + 1}. {ex.name}</p>
                    <button className="help-icon">
                        <i className="fa-regular fa-circle-question"/>
                    </button>
                  </div>
                  <p className="exercise-info">Sets: {ex.sets}</p>
                  <p className="exercise-info">Goal reps: {ex.reps}</p>
                  <input className="weight-input" placeholder="Weight" />
                  <input className="reps-input" placeholder="Reps Achieved" />
                </React.Fragment>
              );
            })}
          </div>

        ) : isRestOnly ? (
          <div>
            <div className="exercise-name">
              <h4>Rest</h4>
            </div>
            <h6>Do something productive!</h6>
          </div>

        ) : (
          <div>
            {restActivity === 'plyometrics' && plyometrics && (
              <div>
                <div className="exercise-name">
                  <h4>Plyometrics</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                {plyometrics.map((ex, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="exercise-name">
                        <p>{i + 1}. {ex.name}</p>
                        <button className="help-icon">
                            <i className="fa-regular fa-circle-question"/>
                        </button>
                      </div>
                      <p className="exercise-info">Sets: {ex.sets}</p>
                      <p className="exercise-info">Goal Reps: {ex.reps}</p>
                      { i=== 1
                        ? <input className="weight-input" placeholder="Weight" />
                        : null
                      }
                      <input className="reps-input" placeholder="Reps Achieved" />
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {restActivity === 'cardio' && cardio && (
              <div>
                <div className="exercise-name">
                  <h4>Cardio</h4>
                </div>
                <h6>Time</h6>
                <h6>Incline</h6>
                {cardio.map((ex, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="exercise-name">
                        <p>{i + 1}. {ex.name}</p>
                        <button className="help-icon">
                            <i className="fa-regular fa-circle-question"/>
                        </button>
                      </div>
                      <p className="exercise-info">Time: {ex.time}</p>
                      <p className="exercise-info">
                        Incline: {ex.incline != null ? ex.incline : 0}
                      </p>
                      {i === 0 
                      ? null 
                      : <input className="weight-input" placeholder="Time Achieved"/>
                      }
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {restActivity === 'rest' && (
              <div>
                <div className="exercise-name">
                  <h4>Rest</h4>
                </div>
                <h6>Do something productive!</h6>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <button>Save & Exit</button>
        <button disabled={true}>Complete</button>
      </div>
    </div>
  );
}

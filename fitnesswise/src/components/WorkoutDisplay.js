import React from 'react';

const WorkoutDisplay = ({ workout }) => {
    return (
        <div className="workout-display">
            <h2>{workout.title}</h2>
            <ul>
                {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                        <strong>{exercise.name}</strong>: {exercise.reps} reps, {exercise.sets} sets
                    </li>
                ))}
            </ul>
            <div className="progress">
                <p>Progress: {workout.progress}%</p>
            </div>
        </div>
    );
};

export default WorkoutDisplay;
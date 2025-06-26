import React from 'react';

const TimerButtons = ({ onStart, onStop }) => {
    return (
        <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={onStart}>Start</button>
            <button style={styles.button} onClick={onStop}>Stop</button>
        </div>
    );
};

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        transition: 'background-color 0.3s',
    },
};

export default TimerButtons;
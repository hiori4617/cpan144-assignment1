import { useState } from 'react';

export default function MoodSelector() {
    const [mood, setMood] = useState('');

    return (
        <div>
            <p>How are you feeling about your studies today?</p>

            <button onClick={() => setMood('Happy')}>Happy</button><br></br>
            <button onClick={() => setMood('Neutral')}>Neutral</button><br></br>
            <button onClick={() => setMood('Sad')}>Sad</button>

            {mood === "" && <p>Please select your mood.</p>}

            {mood === "Happy" && (<p>Great to hear you're feeling happy! Keep up the good work!</p>)}
            {mood === "Neutral" && (<p>It's okay to feel neutral. Try to find something that makes you feel better!</p>)}
            {mood === "Sad" && (<p>We're here for you. Don't hesitate to reach out if you need support!</p>)}
        </div>
    );
}
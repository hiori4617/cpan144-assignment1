import Navbar from "../components/Navbar";
import MoodSelector from "../components/MoodSelector";

export default function Mood() {
    return (
        <div>
            <Navbar />
            <h1>Track Your Study Mood</h1>
            <MoodSelector />
        </div>
    );
}
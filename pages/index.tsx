import Navbar from "../components/Navbar";
import StudyTip from "../components/StudyTip";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to My Study Planner</h1>
            <p>This application helps students manage tasks and track study moods.</p>
            <StudyTip
             title="Stay Motivated" 
             message="Remember to set small, achievable goals for each study session." />
        </div>
    );
}
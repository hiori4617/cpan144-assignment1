import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

export default function Tasks() {
    return (
        <div>
            <Navbar />
            <h1>Study Tasks</h1>
            <TaskList />
        </div>
    );
}
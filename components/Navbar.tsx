import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/tasks">Tasks</Link> |{" "}
            <Link href="/mood">Mood</Link>    
        </nav>
    );
}
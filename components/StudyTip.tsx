type StudyTipProps = {
    title: string;
    message: string;
};

export default function StudyTip({ title, message }: StudyTipProps) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}
import "./status-component.css";

const StatusComponent = () => {

    const days = [
        "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    const listItems = days.map((day) =>
        <div className={"day"}>{day}</div>
    );

    return (
        <>
            <div className="status-section">

                <div className={"status-title-area"}>
                    <div className={"status-title"}>
                        Daily Tracker
                    </div>
                </div>
                <div className={"day-list"}>
                    <div className={"day day-checked"}>Monday ✓</div>
                    {listItems}
                </div>
            </div>
        </>
    );
}

export default StatusComponent;
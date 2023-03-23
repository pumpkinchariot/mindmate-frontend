import "./daily-quest-component.css";

/*
The component, to start the actual lesson
Has a Topic, a short introduction
Has a "start lesson", a "skip lesson & start quiz" option and "generate other suggestion"
Topic changes every day => suggestions based on interests (mixed between new stuff and stuff you already know)
 */
const DailyQuestComponent = () => {
    return (
        <>
            <div className="lesson-container">
                <div className="lesson-text-section">
                    <div className="lesson-title">
                        Topic
                    </div>
                    <div className="lesson-description">
                        Description...
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum.
                    </div>
                </div>
                <div className="lesson-button-section">
                    <div style={{width: "33%"}}></div>
                    <div style={{width: "33%"}}>
                        <button className="lesson-button">start lesson!</button>
                    </div>
                    <div style={{width: "33%"}}>
                        <button className="quiz-button">start quiz ➜</button>
                    </div>
                </div>
            </div>
        </>);
}

export default DailyQuestComponent;
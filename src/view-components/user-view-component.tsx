import "./user-view-component.css";
import LevelComponent from "../components/level/level-component";
import DailyQuestComponent from "../components/daily-quest-component";

const UserViewComponent = () => {
    return (
        <>
            <div className="user-view-container">
                <div className="user-view-header">
                    <div className="header-button-section">
                        <button className="header-button">
                            Dashboard
                        </button>
                        <button className="header-button">
                            Virtual Mind
                        </button>
                    </div>
                    <LevelComponent/>
                </div>

                <div className="user-header-spacer">

                </div>

                <div>
                    Get your daily dose!
                </div>

                <DailyQuestComponent/>
            </div>
        </>
    );
}

export default UserViewComponent;
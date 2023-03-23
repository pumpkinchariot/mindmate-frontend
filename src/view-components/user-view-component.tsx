import "./user-view-component.css";
import LevelComponent from "../components/level/level-component";

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

                <div className="featured-topic">
                    Today's Featured Topic
                </div>
            </div>
        </>
    );
}

export default UserViewComponent;
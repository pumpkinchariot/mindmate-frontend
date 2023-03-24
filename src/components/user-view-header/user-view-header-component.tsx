import LevelComponent from "../level/level-component";
import "./user-view-header-component.css";

const UserViewHeaderComponent = () => {
    return (<>
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
        </>);
}

export default UserViewHeaderComponent;
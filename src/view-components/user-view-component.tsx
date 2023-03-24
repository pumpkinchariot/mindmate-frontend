import "./user-view-component.css";
import LevelComponent from "../components/level/level-component";
import DailyQuestComponent from "../components/daily-quest-suggestion/daily-quest-component";
import CategoryOverviewComponent from "../components/catgeories/category-overview-component";
import UserViewHeaderComponent from "../components/user-view-header/user-view-header-component";
import StatusComponent from "../components/status/status-component";

const UserViewComponent = () => {
    return (
        <>
            <div className="user-view-container">
                <UserViewHeaderComponent/>

                <div className={"quest-section"}>
                    <StatusComponent/>
                    <DailyQuestComponent/>
                </div>
                <div>
                    <CategoryOverviewComponent/>
                </div>
            </div>
        </>
    );
}

export default UserViewComponent;
import React from "react";
import "./guest-view-component.css";
import LogInComponent from "../components/log-in/log-in-component";

const GuestViewComponent = () => {

    return(
        <div className="guest-view-container">
            <div className="mindmate-frontend">
                Mindmate
            </div>
            <div className="explanation-text">
                Build new knowledge in just <span style={{color: "magenta"}}>5 minutes</span> a day!
            </div>
            <div className="explanation-text">
                Test yourself with fun quiz questions and keep track of your progress through your virtual mind.
            </div>
            <div className="explanation-text ready">
                Ready to start your learning journey today?
            </div>
            <div className="button-container">
                <button className="lets-go-button">
                    Let's go!
                </button>
                <button className="learn-more-button">
                    Learn More
                </button>
            </div>
{/*            <div>
                Daily learning challenges and quiz questions to keep you engaged
                Build knowledge in areas you love or want to improve in, such as history, music, art, and technology
                Track your knowledge in a virtual brain and create a knowledge base that you can refer to later
                Level up and unlock new titles as you progress
                Choose your own pace - just 5 minutes a day can help you build a strong foundation of knowledge in many areas over time.
            </div>*/}
        </div>
    );
}

export default GuestViewComponent;
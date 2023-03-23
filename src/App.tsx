import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserViewComponent from "./view-components/user-view-component";
import GuestViewComponent from "./view-components/guest-view-component";
import LogInComponent from "./components/log-in/log-in-component";

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
          {!isLoggedIn && <LogInComponent setLoggedIn={setLoggedIn}/>}
          {isLoggedIn ? <UserViewComponent/> : <GuestViewComponent/>}
      </header>
    </div>
  );
}

export default App;

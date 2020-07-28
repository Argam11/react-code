import React from "react";
import Header from "./components/header";
import MyEvents from "./components/pages/my-events";
import "./app.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content-area">
                <MyEvents />
            </div>
        </div>
    );
}

export default App;

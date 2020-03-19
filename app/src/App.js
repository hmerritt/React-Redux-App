import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/header";
import FilmData from "./components/filmData";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <FilmData />
        </div>
    );
}

export default App;

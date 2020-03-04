import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {

    const isFetching = useSelector(state => state.film.isFetching);

    return (
        <div className="App">
            <h1>Async Redux: {isFetching ? "Yep" : "Nope"}</h1>
        </div>
    );
}

export default App;

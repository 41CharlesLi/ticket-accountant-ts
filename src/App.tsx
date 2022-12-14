import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyConcerts from "./pages/MyConcerts";
import SearchInput from "./Components/SearchInput";
// input boxes to search artist name and price range (maybe a drop down)
// component to render results with a component to render each card
// add shows to a list...and there's a submit button
// on submit, send results to firebase
// there's a public list page that shows everyone's wishlists
// error handle results + close off api calls if user navigates away from page
// error pages and path protection
// ability to log in anon or google
// BJwaGMsOKlYF3J3uzGUf9V3s0DMHofGE

function App() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<object[]>([]);

    const getConcerts = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const api = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?size=10&keyword=${searchTerm}&apikey=BJwaGMsOKlYF3J3uzGUf9V3s0DMHofGE`
        );
        const data = await api.json();
        setSearchResults(data._embedded.events);
    };

    return (
        <div className="App">
            <Navbar />
            <SearchInput
                setSearchTerm={setSearchTerm}
                getConcerts={getConcerts}
            />

            <Routes>
                <Route
                    path="/"
                    element={<Home searchResults={searchResults} />}
                />
                <Route path="/myConcerts" element={<MyConcerts />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;

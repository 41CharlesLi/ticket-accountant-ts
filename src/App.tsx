import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyConcerts from "./pages/MyConcerts";
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

    const getConcerts = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const api = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?size=10&keyword=${searchTerm}&apikey=BJwaGMsOKlYF3J3uzGUf9V3s0DMHofGE`
        );
        const data = await api.json();
        console.log(data._embedded.events);
        //important info: Name, Images (see if you can use 3 in a carousel), sale-public-start-time, url to ticketmaster, embedded.venue.name/city/county, if pricerange available
    };

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyConcerts" element={<MyConcerts />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <form action="" onSubmit={getConcerts}>
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;

import { useState } from "react";

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
    const getConcerts = async () => {
        const api = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?size=10&keyword='raptors'&apikey=BJwaGMsOKlYF3J3uzGUf9V3s0DMHofGE`
        );
        const data = await api.json();
        console.log(data);
    };
    getConcerts();

    return <div className="App"></div>;
}

export default App;

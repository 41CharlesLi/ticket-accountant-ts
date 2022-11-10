import React from "react";

interface resultObject {
    images: string;
    _embedded: string;
}

type searchResultProps = {
    searchResult: resultObject;
};

//important info: Name, Images (see if you can use 3 in a carousel), sale-public-start-time, url to ticketmaster, embedded.venue.name/city/county, if pricerange available

function SearchResult({ searchResult }: searchResultProps) {
    // console.log(searchResult.priceRanges[0].currency);
    return (
        <div className="indResult">
            <div className="indResultContainer">
                <h3>{searchResult.name}</h3>
                <img src={searchResult.images[0].url} alt="" />
            </div>
            <p>{searchResult._embedded.venues[0].name}</p>
            <p>
                {searchResult._embedded.venues[0].city.name},{" "}
                {searchResult._embedded.venues[0].country.name}
            </p>

            <p>
                {searchResult.priceRanges && searchResult.priceRanges[0].min} -{" "}
                {searchResult.priceRanges && searchResult.priceRanges[0].max}
            </p>
        </div>
    );
}

export default SearchResult;

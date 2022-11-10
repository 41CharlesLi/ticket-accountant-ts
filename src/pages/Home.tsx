import React from "react";
import SearchResult from "../Components/SearchResult";

interface resultObject {
    id?: string;
    images: string;
}

type SearchResultsProps = {
    searchResults?: resultObject[];
};

function Home({ searchResults }: SearchResultsProps) {
    return (
        <>
            <h2>Search Results</h2>

            {searchResults &&
                searchResults.map((searchResult) => {
                    console.log(searchResult);
                    return (
                        <div className="searchResult" key={searchResult.id}>
                            <SearchResult searchResult={searchResult} />
                        </div>
                    );
                })}
        </>
    );
}

export default Home;

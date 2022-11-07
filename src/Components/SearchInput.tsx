import React from "react";

type SearchInputProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    getConcerts: (e: React.SyntheticEvent) => void;
};

function SearchInput({ setSearchTerm, getConcerts }: SearchInputProps) {
    return (
        <form action="" onSubmit={getConcerts}>
            <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
}

export default SearchInput;

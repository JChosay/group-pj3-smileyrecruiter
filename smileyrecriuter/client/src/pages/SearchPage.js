import React from "react";
import SearchBar from "../components/SearchResults/searchBar";
import SearchResults from "../components/SearchResults"

export default function SearchPage() {
    return (
        <div className="row">
        <SearchBar />
        <SearchResults/>
        </div>
    );
}
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';
const API_KEY = 'AIzaSyDBBxMrXMXfQ71ud8PmXt8drTp_bcPZJyU';
// Create a new component.
// This component should produce some HTML
const App = () => {
    return  (
        <div>
            <SearchBar />
        </div>
    )
}
// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react'
import search from '../../img/search.svg';
import cancel from '../../img/cancel.svg';
function Search({ parentCallback }) {

    return (
        <div className="search">
            <input className="search__input" type="text" required onChange={(event) => {
                parentCallback(event.target.value);
            }} />
            <img className="search_icon" src={search} />
            <img className="cancel_icon" src={cancel} onClick={() => {
                document.querySelector(".search__input").value = "";
                parentCallback("");
            }} />
        </div>
    )
}

export default Search

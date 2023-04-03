import { useState } from 'react'

function SearchBar ({provideTerm}) {

    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        provideTerm(searchTerm);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Videos..."
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
            </form>

        </div>
    )
}

export default SearchBar
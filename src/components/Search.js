import { useState } from 'react'
import { useHistory } from "react-router-dom"

function Search({alignment}) {
    const [query, setQuery] = useState("");
    const [collection, setCollection] = useState("");
    const history = useHistory();
    const handleClick = () => {
        history.push(`/search/${query}/${collection}`)
    }

    return (
        <div className={`search ${alignment}`}>
            <input type="text" placeholder="Query" className="text-input" value={query} onChange={e => setQuery(e.target.value)} />
            <div className="select-wrapper">
                <select className="text-input" value={collection} onChange={e => setCollection(e.target.value)} placeholder="Collections">
                    <option value="">Collections</option>
                    <option value="9415206">Gaming</option>
                    <option value="3403106">Summer</option>
                    <option value="uTzWHa7H0wE">Retro Cameras</option>
                    <option value="12104482">Olympics</option>
                </select>
            </div>
            <button onClick={handleClick} className="primary-btn">SEARCH</button>
        </div>
    )
}

export default Search

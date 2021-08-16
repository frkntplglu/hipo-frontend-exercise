import React from 'react'

function Search({alignment}) {
    return (
        <div className={`search ${alignment}`}>
            <input type="text" placeholder="Query" className="text-input" />
            <div className="select-wrapper">
                <select className="text-input" name="" id="" placeholder="Collections">
                    <option value="">Featured</option>
                    <option value="">Wallpapers</option>
                    <option value="">Nature</option>
                    <option value="">Textures & Patterns</option>
                    <option value="">Architecture</option>
                </select>
            </div>
            <button className="primary-btn">SEARCH</button>
        </div>
    )
}

export default Search

import { useState, useEffect } from 'react'
import { useHistory,useParams } from "react-router-dom"

function Search({alignment}) {
    const {query, collections} = useParams();
    const [queryState, setQueryState] = useState("");
    const [collectionState, setCollectionState] = useState("");
    const history = useHistory();
    const handleClick = () => {
        history.push(`/search/${queryState}/${collectionState}`)
    }
    useEffect(() => {
        if(query || collections){
            setQueryState(query)
            setCollectionState(collections)
        }
    }, [])

    return (
        <div className={`search ${alignment}`}>
            <input type="text" placeholder="Query" className="text-input" value={queryState} onChange={e => setQueryState(e.target.value)} />
            <div className="select-wrapper">
                <select className="text-input" value={collectionState} onChange={e => setCollectionState(e.target.value)} placeholder="Collections">
                    <option value="">Collections</option>
                    <option value="208403">Love</option>
                    <option value="3403106">Summer</option>
                    <option value="1424240">Animal</option>
                    <option value="1597792">Women</option>
                </select>
            </div>
            <button onClick={handleClick} className="primary-btn">SEARCH</button>
        </div>
    )
}

export default Search

import Header from '../components/Header'
import PhotoList from '../components/PhotoList'

function SearchResults() {
    return (
        <>
          <Header />  
          <div className="container">
            <PhotoList />
          </div>
        </>
    )
}

export default SearchResults

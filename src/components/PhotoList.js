import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Alert from './Alert';
import Loader from './Loader';
import NoResult from './NoResult';
import Photo from './Photo'

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isEmpty, setIsEmpty] = useState(false)
    const {query, collections} = useParams();
    useEffect(() => {
        getPhotos(query, collections);
    },[query, collections])
    
    const getPhotos = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&collections=${collections}`,{
            headers: {
                'Authorization': 'Client-ID f6b8cbbf28ca721a4b7b2df3fbbc83abd9e2ba5672bb838b81dbbcf84d97fdfc', 
            }
        });
        if(!response.ok) {
            setErrorMessage(`An error has occured : ${response.statusText}`);
        }else{
            const data = await response.json();
            if(data.total === 0) {
                setIsEmpty(true);
            }else{
                setIsEmpty(false);
                setPhotos(data.results);
            }
            
        }
    }
    if(isEmpty){
        return (<NoResult />)
    }
    else if(photos.length > 0){
        return (
            <div className="photo-list">
                {
                    photos.map(photo => <Photo key={photo.id} id={photo.id} alt_description={photo.alt_description} urls={photo.urls} />)
                }
                
            </div>
        )
    }
    return (
        errorMessage ? <Alert type="error" message={errorMessage} />: 
        <Loader />
    )
    
}

export default PhotoList

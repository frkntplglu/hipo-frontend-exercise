import {useEffect, useState} from 'react'
import Alert from './Alert';
import Loader from './Loader';
import NoResult from './NoResult';
import Photo from './Photo'

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        getPhotos();
        
        
    },[])
    
    const getPhotos = async () => {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.furkan.dev/photo.json');
        if(!response.ok) {
            setErrorMessage(`An error has occured : ${response.statusText}`);
        }else{
            const data = await response.json();
            setPhotos(data);
        }
    }

    if(photos.length > 0){
        return (
            <>
            <NoResult />
            <div className="photo-list">
                {
                    photos.map(photo => <Photo key={photo.id} id={photo.id} alt_description={photo.alt_description} urls={photo.urls} />)
                }
                
            </div>
            </>
        )
    }
    return (
        errorMessage ? <Alert type="error" message={errorMessage} />: 
        <Loader />
    )
    
}

export default PhotoList

import { useState } from 'react'
import { Link } from 'react-router-dom';
import PhotoModal from './PhotoModal';

function Photo(props) {
    const [isShown, setIsShown] = useState(false);
    const {
        id,
        urls,
        alt_description
    } = props;
    const handleModalClose = () => {
        setIsShown(false)
    }
    const getPhotoById = async (e,id) => {
        e.preventDefault();
        console.log(id)
        setIsShown(true);

    }
    return (
        <>
        {
            isShown ? <PhotoModal id={id} handleClose={handleModalClose} /> : null 
        }
        <div className="photo-box">
            <a onClick={(e) => getPhotoById(e,id)}><img src={urls.regular} alt={alt_description} /></a>
        </div>
        </>
    )
}

export default Photo

import { useState, useEffect } from 'react'
import Loader from './Loader';

function PhotoModal(props) {
    const { id, handleClose } = props;
    const [photoDetail, setPhotoDetail] = useState({});
    useEffect(async () => {
        console.log(id)
        const response = await fetch(`https://api.unsplash.com/photos/${id}`,{
            headers: {
                'Authorization': 'Client-ID f6b8cbbf28ca721a4b7b2df3fbbc83abd9e2ba5672bb838b81dbbcf84d97fdfc', 
            }
        });
        const data = await response.json();
        setPhotoDetail(data);
        
    }, [])

    
    return (
        <div className="modal-overlay">

            <div className="modal-content">
                <button className="close-btn" onClick={handleClose}>X</button>
                {
                    photoDetail.id ? 
                    <div className="photo-detail">
                        <img src={photoDetail.urls.regular} alt={photoDetail.alt_description} className="photo-detail-img" />
                        <div className="photo-info">
                            <div className="user">
                                <div className="user-avatar"><img src={photoDetail.user.profile_image.medium} alt={photoDetail.user.name} /></div>
                                <div className="user-info">
                                    <div className="user-firstname">{photoDetail.user.name}</div>
                                    <div className="username">@{photoDetail.user.username}</div>
                                </div>
                            </div>
                            <a href={photoDetail.links.download} className="download-btn">Download</a>
                        </div>
                        <div className="photo-map"></div>
                    </div>
                    : <Loader />
                }
                
            </div>
        </div>
    )
}

export default PhotoModal

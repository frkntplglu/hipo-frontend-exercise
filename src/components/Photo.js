import React from 'react'

function Photo(props) {
    const {
        id,
        urls,
        alt_description
    } = props;
    return (
        <div className="photo-box">
            <a href={`/photo/${id}`}><img src={urls.regular} alt={alt_description} /></a>
        </div>
    )
}

export default Photo

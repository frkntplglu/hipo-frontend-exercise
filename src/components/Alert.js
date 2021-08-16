import React from 'react'

function Alert(props) {
    const {type, message} = props;
    return (
        <div className={`alert ${type}`}>
            {message}
        </div>
    )
}

export default Alert

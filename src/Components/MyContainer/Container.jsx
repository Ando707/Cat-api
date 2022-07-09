import React from "react";

const Container = ({photos}) => {


    return (
        <div className='container'>
            {photos.length > 0 && (
                photos.map(photo => (
                <div key={photo.id} className='img-box'>
                    <img src={photo.url} alt='img' className='img'/>
                </div>
                ))
            )}
        </div>
    )
};

export default Container;
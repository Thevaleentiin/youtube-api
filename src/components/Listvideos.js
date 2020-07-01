import React from 'react'
import Itemvideo from './Itemvideo'

const Listvideos = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <Itemvideo key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='container-list'>{renderedVideos}</div>;
};
export default Listvideos;
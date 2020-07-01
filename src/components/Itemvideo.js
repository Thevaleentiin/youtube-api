import React from 'react'

const Itemvideo = ({video, handleVideoSelect}) => {
  return(
    <div onClick={ () => handleVideoSelect(video)} className='video-item'>
      <img className='miniature-item' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className='content'>
        <div className='title'>{video.snippet.title}</div>
      </div>
    </div>
  )
}
export default Itemvideo
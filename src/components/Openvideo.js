import React from 'react'

const Openvideo = ({ video }) => {

  if (!video) {
    return (
      <div className="no-video">
        <p>Veuillez lancer une recherche!</p>
      </div>
    )  
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <>
      <div className="content-iframe">
        <h4 className="video-title">{video.snippet.title}</h4>
        <p className="video-description">{video.snippet.description}</p>
      </div>
      <div className="container-iframe">
        <iframe src={videoSrc} allowFullScreen frameborder="0" scrolling="no" title={video.snippet.title} />
      </div>
    </>
  );

}

export default Openvideo
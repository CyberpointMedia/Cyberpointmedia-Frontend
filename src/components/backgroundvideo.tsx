import React from 'react';
interface VideoBackgroundProps {
  url: string;
  muted?: boolean;
  loop?: boolean;
};
 const BackgroundVideo = ({ url, muted = true, loop = true }: VideoBackgroundProps) => {
    return (
      <div>
        <video
            autoPlay
            muted={muted}
            loop={loop}
            playsInline // Ensures inline playback on iOS devices
        >
            <source src={url} type="video/mp4" /> // Specify video format
            <source src={url} type="video/ogg" />  // Optional for broader compatibility
            Your browser does not support the video tag.
        </video>
        </div>
    );
};

export default BackgroundVideo;




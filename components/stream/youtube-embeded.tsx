'use client';

import { useEffect } from 'react';

export default function YouTubeLite({
  videoId,

}: {
  videoId: string;
 
}) {
  useEffect(() => {
    import('lite-youtube-embed');
    import('lite-youtube-embed/src/lite-yt-embed.css');
  }, []);

return (
 <div className="overflow-hidden rounded-[20px]">

    <div className="video-frame">
      <lite-youtube
        videoid={videoId}
        playlabel="Play video"
      />
    </div>
  </div>
);

}

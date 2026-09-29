'use client'
import { useEffect, useRef } from 'react'
import { MediumVideo } from '../types/sanity'
// import Vimeo from '@u-wave/react-vimeo'

export default function Video({medium, medStyle, cName, muted=true, autoplay=true}: {
  medium: MediumVideo,
  medStyle?: any,
  cName?: string, 
  muted?: boolean, 
  autoplay?: boolean,
}) {
  const vidRef = useRef<HTMLVideoElement>(null)
  
      useEffect(() => {
        const video = vidRef.current
        const handleVisibilityChange = () => {
          if (document.hidden && video != null) {
            video.pause()
          } else if (video != null) {
            video.play()
          }
        }
        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
      })
      
      return (
        <div 
          className={`videowrapper medium ${cName}`}
        >
          <video
            controls={false}
            autoPlay={autoplay}
            muted={muted}
            loop
            preload="auto"
            className='vimeo'
            ref={vidRef}
            playsInline
          >
            <source src={medium.video.asset.url} type="video/mp4" style={medStyle} />
            Your browser does not support the video tag.
          </video>
          {/* <Vimeo 
            className='vimeo'
            video={medium.defaultUrl}
            autoplay={autoplay || true}
            loop
            paused={paused}
            muted={true}
            volume={muted}
            controls={false}
            autopause={false}
            style={{
              height: arWidth > arHeight ? "" : "100%", // see global.css
              width: arWidth > arHeight ? "" : "unset", // see global.css
              aspectRatio: `${arWidth}/${arHeight} auto`
            }}
          /> */}
        </div>
      )
}

import Image from "next/image"
// import Vimeo from '@u-wave/react-vimeo'
import '@/lib/styles/medium.css'
import { MediumImage, MediumVideo } from "../types/sanity"

export default function Medium({medium, medStyle, objectFit, cName, paused=false, muted=true, autoplay=true}: {
  medium: MediumImage | MediumVideo,
  medStyle?: any,
  objectFit: string, 
  cName?: string, 
  paused?: boolean, 
  muted?: boolean, 
  autoplay?: boolean,
}) {
    if (medium?._type === 'image') {
      return (
        <Image
          className={`medium ${cName}`}
          src={medium.asset.url}
          alt={medium.alt || ""}
          width={medium.asset.metadata.dimensions.width}
          height={medium.asset.metadata.dimensions.height}
          priority
        />
      )
    } 
    else if (medium?._type === 'customVideo') {
      const arWidth = medium.arWidth
      const arHeight = medium.arHeight
      
      return (
        <div 
          className={`videowrapper medium ${cName}`}
        >
          <video
            // width="320"
            // height="240"
            // poster="/path/to/poster.jpg"
            // controls
            preload="auto"
            autoPlay
            muted
            loop
            className='vimeo'
          >
            <source src={medium.video.asset.url} type="video/mp4" />
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
    } else return null
}

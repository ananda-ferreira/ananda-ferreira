import Image from "next/image"
import Video from "./Video"
import { MediumImage, MediumVideo } from "../types/sanity"
import '@/lib/styles/medium.css'

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
        preload
        placeholder="blur"
      />
    )
  } 
  else if (medium?._type === 'customVideo') {
    return <Video medium={medium}/>
  } else return null
}

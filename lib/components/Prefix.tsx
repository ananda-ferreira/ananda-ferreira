"use client"
import "@/lib/styles/prefix.css"
import useIsMobile from "../hooks/useIsMobile"

export default function Prefix() {
  const isMobile = useIsMobile()

  if (isMobile) return 
  else return <p><span className="prefix">www</span> .</p>

}

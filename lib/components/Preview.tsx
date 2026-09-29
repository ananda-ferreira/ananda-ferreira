'use client'
import useIsMobile from "../hooks/useIsMobile"
import { useHoveredProject } from '@/lib/context/ProjectPreviewWrapper';
import Medium  from '@/lib/components/Medium';
import '@/lib/styles/preview.css'

export default function Preview() {
    const isMobile = useIsMobile()

    const {hoveredProject} = useHoveredProject()
    
    // if (!isMobile) return
    // else 
        return (
        <section className="preview">
            {isMobile && hoveredProject?.projectUrl && <p className="explore">
                <a href={hoveredProject.projectUrl} className="" target="_blank" rel="noreferrer">
                    Explore website
                </a>
            </p>}
            <div className="mediumwrapper grid">
                    {hoveredProject?.medium && <Medium 
                        medium={hoveredProject.medium[0]}
                        medStyle={undefined}
                        objectFit={""}
                        cName={""} 
                    />}
            </div>
        </section>
    )
}

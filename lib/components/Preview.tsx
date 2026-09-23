'use client'
import useIsMobile from "../hooks/useIsMobile"
import { useHoveredProject } from '@/lib/context/ProjectPreviewWrapper';
import '@/lib/styles/preview.css'
import { Project } from "../types/sanity";

export default function Preview() {
    const isMobile = useIsMobile()

    const {hoveredProject} = useHoveredProject()

    if (!isMobile) return
    else return (
        <section className="preview">
            {hoveredProject && <p className="explore">
                    <a href={hoveredProject.projectUrl} className="" target="_blank" rel="noreferrer">
                        Explore website
                    </a>
            </p>}
            <div className="medium grid">
                {hoveredProject && <div></div>}
            </div>
        </section>
    )
}

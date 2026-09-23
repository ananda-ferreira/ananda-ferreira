'use client'

import "@/lib/styles/projectlist.css"
import type { Project } from '@/lib/types/sanity';
import Prefix from "@/lib/components/Prefix";
import NumberHighlighter from "@/lib/components/NumberHighlighter";
import { useHoveredProject } from "../context/ProjectPreviewWrapper";
import useIsMobile from "../hooks/useIsMobile";

export default function ProjectList({projects}: {projects: Project[]}) {
    const {hoveredProject, setHoveredProject} = useHoveredProject()
    const isMobile = useIsMobile()

    return (
    <section className="projectlist">   
        {isMobile 
            ? <>{projects?.map((project: Project, i: number) => {
                // const isSelected: boolean = false
                const isSelected = hoveredProject?._id === project._id
                return( <div
                    className={`project grid ${isSelected ? 'selected' : ''}`}
                    key={project._id}
                    onTouchStart={() => setHoveredProject(project)}
                >
                    <p className="number">{i}</p>
                    <div className="title">
                        <Prefix />
                        <NumberHighlighter data={project.title} />
                    </div>
                    <p className="number">{project.publishedAt}</p>
                </div>)
            })} </>
            : <>{projects?.map((project: Project, i: number) => (
                <a
                    href={project.projectUrl || ""}
                    className="project grid"
                    key={project._id}
                    target="_blank"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <p className="number">{i}</p>
                    <div className="title">
                        <Prefix />
                        <NumberHighlighter data={project.title} />
                    </div>
                    <p className="number">{project.publishedAt}</p>
                </a>
         ))} </>
        }     
    </section>
  )
}

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
                const isSelected = hoveredProject?._id === project._id
                return( <div
                    className={`project grid ${isSelected ? 'selected' : ''}`}
                    onClick={() => setHoveredProject(project)}
                    key={project._id}
                >
                    <p className="number">{i}</p>
                    <p className="title">
                        <Prefix />
                        <NumberHighlighter data={project.title} />
                    </p>
                    <p className="number">{project.publishedAt}</p>
                </div>)
            })} </>
            : <>{projects?.map((project: Project, i: number) => (
                project.projectUrl ? (<a
                    className={`project grid`}
                    href={project.projectUrl}
                    target="_blank"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    key={project._id}
                >
                    <p className="number">{i}</p>
                    <p className="title">
                        <Prefix />
                        <NumberHighlighter data={project.title} />
                    </p>
                    <p className="number">{project.publishedAt}</p>
                    {hoveredProject?._id === project._id && <p>Explore website</p>}
                </a>)
                : (<div
                    className={`project grid`}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    key={project._id}
                >
                    <p className="number">{i}</p>
                    <p className="title">
                        <Prefix />
                        <NumberHighlighter data={project.title} />
                    </p>
                    <p className="number">{project.publishedAt}</p>
                </div>)
         ))} </>
        }     
    </section>
  )
}

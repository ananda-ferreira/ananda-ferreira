
import Prefix from "@/lib/components/Prefix";
import NumberHighlighter from "@/lib/components/NumberHighlighter";
import type { Project } from '@/lib/types/sanity';
import "@/lib/styles/projectlist.css"

export default function ProjectList({projects}: {projects?: Project[]}) {
  return (
    <section>        
        <div className="projectlist">
            {projects?.map((project: Project, i: number) => (
                <a
                    href={project.projectUrl || ""}
                    className="projectitem"
                    key={project._id}
                    target="_blank"
                >
                <p className="number">{i}</p>
                <div className="title">
                    <Prefix />
                    <NumberHighlighter data={project.title} />
                </div>
                <p className="number">{project.publishedAt}</p>
                </a>
            ))}
        </div>
    </section>
  )
}

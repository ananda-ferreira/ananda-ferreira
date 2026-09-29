import { Collaborator } from '../types/sanity'
import "@/lib/styles/collablist.css"

export default function CollabList({collaborators}:{collaborators: Collaborator[]}) {
  
  return (
    <section className="collab grid">
      <p>Co-creators: </p>
      <p>
        {collaborators.map((collab: Collaborator, i: number) => (
          <span key={collab._id+i}>
            <span>
              <a
                href={collab.url || `#`}
                target={collab.url ? "_blank" : ''}
                rel={collab.url ? "noopener noreferrer" : ''}
                className={collab.url ? "" : "notlinked"}
                >{collab.name}</a>
            </span>
            {i < collaborators.length -1 && <span> / </span> }
          </span>
        ))}
      </p>
    </section>
  )
}

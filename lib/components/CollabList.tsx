import { Collaborator } from '../types/sanity'

export default function CollabList({collaborators}:{collaborators: Collaborator[]}) {
  
  if (collaborators.length < 0) return (
    <section>
        <h3>Collaborators</h3>
        <p>
        {collaborators.map((collab: Collaborator, i: number) => (
            <>
            <span>
            <a
                key={collab._id}
                href={collab.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
            >{collab.name}</a>
            </span>
            {i === collaborators.length && <span>/</span> }
            </>
        ))}
        </p>
    </section>
  )
}

import { client } from "@/lib/sanity/client";
import { PROJECTS_QUERY, COLLABORATORS_QUERY } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import ProjectList from "@/lib/components/ProjectList";
import CollabList from "@/lib/components/CollabList";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const [projects, collaborators] = await Promise.all([
    client.fetch(PROJECTS_QUERY, {}, options),
    client.fetch(COLLABORATORS_QUERY, {}, options),
  ]);

  return (
    <div>
      <ProjectList projects={projects} />
      <CollabList collaborators={collaborators} />

      {collaborators.length > 0 && (
        <section>
          <h3>Collaborators</h3>
          <p>
            {collaborators.map((collab: any, i: number) => (
              <>
              <span>
                <a
                  key={collab._id}
                  href={collab.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {collab.logo && (
                    <img
                      src={urlForImage(collab.logo).url()}
                      alt={collab.name}
                    />
                  )}
                  <span>{collab.name}</span>
                </a>
              </span>
              {i === collaborators.length && <span>/</span> }
              </>
            ))}
          </p>
        </section>
      )}
    </div>
  );
}

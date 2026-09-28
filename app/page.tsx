import { client } from "@/lib/sanity/client";
import { PROJECTS_QUERY, COLLABORATORS_QUERY } from "@/lib/sanity/queries";
import ProjectList from "@/lib/components/ProjectList";
import CollabList from "@/lib/components/CollabList";
import Preview from "@/lib/components/Preview";
import ProjectPreviewWrapper from "@/lib/context/ProjectPreviewWrapper";
import Footer from "@/lib/components/Footer";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const [projects, collaborators] = await Promise.all([
    client.fetch(PROJECTS_QUERY, {}, options),
    client.fetch(COLLABORATORS_QUERY, {}, options),
  ])
    
  return (
    <div>
      <ProjectPreviewWrapper>
        <Preview />
        <ProjectList projects={projects} />
      </ProjectPreviewWrapper>
      {collaborators && <CollabList collaborators={collaborators} />}
      <Footer />
    </div>
  )
}

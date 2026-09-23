import { defineQuery } from "next-sanity";

// Get all projects for the portfolio page
export const PROJECTS_QUERY = defineQuery(
  `*[_type == "projects" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    slug,
    projectUrl,
    githubUrl,
    publishedAt,
    favIcon,
    medium
  }`
);

// Get a single project by slug
export const PROJECT_QUERY = defineQuery(
  `*[_type == "projects" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    projectUrl,
    githubUrl,
    publishedAt,
    favIcon,
    medium
  }`
);

// Get all collaborators
export const COLLABORATORS_QUERY = defineQuery(
  `*[_type == "collaborators"] | order(name asc) {
    _id,
    name,
    url
  }`
);

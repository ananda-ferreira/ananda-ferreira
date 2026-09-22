import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  projectUrl?: string;
  githubUrl?: string;
  publishedAt: string;
  favIcon?: SanityImageSource;
  medium?: any;
}

export interface Collaborator {
  _id: string;
  name: string;
  url?: string;
}

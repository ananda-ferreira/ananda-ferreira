import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
  _id: string;
  title: string;
  projectUrl: string;
  publishedAt: string;
  medium: (MediumImage | MediumVideo)[];
}

export interface Collaborator {
  _id: string;
  name: string;
  url?: string;
}

// export type Medium = MediumImage | MediumVideo;

export interface MediumImage {
  _type: 'image';
  asset: {
    url: string;
    metadata: {
      dimensions: { width: number; height: number };
    };
  };
  alt?: string;
}

export interface MediumVideo {
  _type: 'customVideo';
  video: {
    asset: {
      url: string;
    };
  };
  arWidth: number;
  arHeight: number;
}

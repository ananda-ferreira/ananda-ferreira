'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '../types/sanity';

const HoveredProjectContext = createContext<{
  hoveredProject: Project | null;
  setHoveredProject: (project: Project | null) => void;
}>({
  hoveredProject: null,
  setHoveredProject: () => {}
})

export function useHoveredProject() {
  return useContext(HoveredProjectContext);
}

export default function ProjectPreviewWrapper({ children }: {children: ReactNode}) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <HoveredProjectContext.Provider value={{ hoveredProject, setHoveredProject }}>
      {children}
    </HoveredProjectContext.Provider>
  );
}
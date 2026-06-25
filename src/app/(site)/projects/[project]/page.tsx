import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { projects, type Project } from "@/data/projects";
import s from './page.module.scss';
import Nav from '@/components/nav/Nav';

interface ProjectPageProps {
  params: { project: string };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find(p => p.id === params.project) as Project
  const image = project.image
    ? [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height
        },
      ]
    : undefined

  return {
    title: `${project.name} • Alex Hollender`,
    description: project.description,
    openGraph: {
      title: `${project.name} • Alex Hollender`,
      description: project.description,
      url: `https://alexhollender.info/projects/${params.project}`,
      // only include image if it exists
      ...(project.image && { images: image })
    },
    twitter: {
      // only include image if it exists
      ...(project.image && { images: image })
    },
  }
}

export default function Project({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.project) as Project
  const ProjectComponent = dynamic(() => import(`@/components/projects/${project.component}`));

  return (
    <main>
      <div className={s.project}>
        <ProjectComponent />
      </div>
      <Nav />
    </main>
  )
}
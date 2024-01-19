import dynamic from 'next/dynamic';
import { projects } from "@/data/projects";
import s from './page.module.scss';
import Nav from '@/components/nav/Nav';

export function generateMetadata({ params }) {
  const project = projects.find(p => p.id === params.project)
  const image = [
    {
      url: project?.image?.src,
      width: project?.image?.width,
      height: project?.image?.height
    },
  ]
 
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

export default function Project({ params }) {
  const project = projects.find(p => p.id === params.project)
  const ProjectComponent = dynamic(() => import(`@/components/projects/${project.component}`));

  return (
    <>
    <div className={s.project}>
      <ProjectComponent />
    </div>
    <Nav />
    </>
  )
}
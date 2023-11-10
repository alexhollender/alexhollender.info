import dynamic from 'next/dynamic';
import { projects } from "@/data/projects"
import comingSoon from '@public/media/wiki-2023/comingsoon.jpg'

export function generateMetadata({ params }) {
  const project = projects.find(p => p.id === params.project)
  const image = [
    {
      url: comingSoon.src,
      width: comingSoon.width,
      height: comingSoon.height
    },
  ]
 
  return {
    title: `${project.name} • Alex Hollender`,
    description: project.description,
    openGraph: {
      title: `${project.name} • Alex Hollender`,
      description: project.description,
      images: image
    },
    twitter: {
      images: image
    },
  }
}

export default function Project({ params }) {
  const project = projects.find(p => p.id === params.project)
  const ProjectComponent = dynamic(() => import(`@/components/projects/${project.component}`));

  return <ProjectComponent />
}
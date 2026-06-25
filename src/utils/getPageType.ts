export type PageType = 'home' | 'about' | 'notes' | 'project'

export default function getPageType(segment: string | null): PageType {
  if (!segment) return 'home'
  if (segment === 'about') return 'about'
  if (segment === 'notes') return 'notes'
  return 'project' // which is equal to `project`
}

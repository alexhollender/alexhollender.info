export default function getPageType(segment) {
  if (!segment) return 'home'
  if (segment === 'about') return 'about'
  if (segment === 'notes') return 'notes'
  return 'project' // which is equal to `project`
}
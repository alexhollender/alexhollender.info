export default function getPageType(segment) {
  if (!segment) return 'home'
  if (segment === 'about' || segment === 'notes') return 'noNav'
  return 'project' // which is equal to `project`
}
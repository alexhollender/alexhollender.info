import Link from 'next/link'
import type { ComponentProps } from 'react'

// Links inside project content: sans-serif + underlined.
export default function ProjectLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link className={`font-sans underline${className ? ` ${className}` : ''}`} {...props} />
  )
}

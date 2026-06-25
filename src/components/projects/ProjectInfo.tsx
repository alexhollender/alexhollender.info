// The role / organization / date block at the top of each project.
export default function ProjectInfo({ items }: { items: string[] }) {
  return (
    <p className="mb-5 font-sans text-sm">
      {items.map((item) => (
        <span key={item} className="block">
          {item}
        </span>
      ))}
    </p>
  )
}

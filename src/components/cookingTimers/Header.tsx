export default function Header({ compact }: { compact: boolean }) {
  return (
    <header
      className={`flex items-center justify-between text-neutral-400 transition-all duration-300 ${
        compact
          ? 'border-b border-neutral-100 px-16 py-5 tablet:px-0 tablet:pb-5 tablet:pt-0'
          : 'border-b border-white px-16 pb-5 pt-10 tablet:p-0'
      }`}
    >
      <h1
        className={`m-0 font-normal font-serif ${
          compact ? 'text-xl' : 'text-title tablet:text-2xl'
        }`}
      >
        Cooking timers
      </h1>
      <h2
        className={`m-0 font-normal font-sans tablet:hidden ${
          compact ? 'text-sm' : 'text-lg'
        }`}
      >
        Set as many as u want
      </h2>
    </header>
  )
}

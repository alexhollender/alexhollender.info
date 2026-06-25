export default function Header({ compact }: { compact: boolean }) {
  return (
    <header
      className={`flex items-center justify-between text-[#A2A2A2] transition-all duration-300 ${
        compact
          ? 'border-b border-[#f5f5f5] px-[60px] py-[20px] max-[900px]:px-0 max-[900px]:pb-[20px] max-[900px]:pt-0'
          : 'border-b border-[#fff] px-[60px] pb-[20px] pt-[40px] max-[900px]:p-0'
      }`}
    >
      <h1
        className={`m-0 font-normal font-['Times_New_Roman'] ${
          compact ? 'text-[20px]' : 'text-[32px] max-[900px]:text-[26px]'
        }`}
      >
        Cooking timers
      </h1>
      <h2
        className={`m-0 font-normal font-sans max-[900px]:hidden ${
          compact ? 'text-[14px]' : 'text-[18px]'
        }`}
      >
        Set as many as u want
      </h2>
    </header>
  )
}

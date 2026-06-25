import type { ReactNode } from "react";

// The project's first/info column. Sticks while the media column scrolls (>=1300px).
export default function StickyColumn({ children }: { children: ReactNode }) {
  return (
    <section className="two-col:sticky two-col:top-[40px] two-col:h-fit two-col:max-h-screen two-col:overflow-y-auto">
      {children}
    </section>
  );
}

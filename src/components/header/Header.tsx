import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between font-xanh-mono text-base leading-normal">
      <Link href="/" className="no-underline">
        <h1>
          Alex Hollender <sup className="font-sans">[software design]</sup>
        </h1>
      </Link>
    </header>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl font-tobias text-xl leading-relaxed content:w-full [&_div]:mb-5">
      <div>
        For the past few years I’ve been building and running{" "}
        <Link
          href="https://recipe.site/"
          target="_blank"
          rel="external"
          className="underline"
        >
          Recipe.Site
        </Link>
        , a publishing tool for recipe creators that enables them to build{" "}
        <Link
          href="https://www.hwoolee.com"
          target="_blank"
          rel="external"
          className="underline"
        >
          websites
        </Link>{" "}
        and{" "}
        <Link
          href="https://cookbooks.katieparla.com/cookbooks/rome"
          target="_blank"
          rel="external"
          className="underline"
        >
          digital cookbooks
        </Link>
        .
      </div>

      <div>
        Prior to that, I led the{" "}
        <Link href="/projects/wiki-2023" className="underline">
          Wikipedia Desktop Redesign
        </Link>
        , and worked on Wikipedia’s mobile editing tools.
      </div>

      <div className="[&>p]:hidden [&>input]:hidden [&>label]:cursor-pointer [&>label]:font-sans [&>label]:text-lg [&:has(input:checked)>label]:hidden [&:has(input:checked)>p]:block">
        <label htmlFor="readMore" className="underline">
          [read more]
        </label>
        <input type="checkbox" id="readMore" />

        <p>
          During my 5 years at Wikipedia I gained experience designing for a
          large, global audience (300+ languages, every device imaginable, ~10
          billion monthly pageviews).
        </p>

        <p>
          Prior to Wikipedia I was the first designer at{" "}
          <Link
            href="https://www.newyorker.com/magazine/2016/03/07/altschools-disrupted-education"
            target="_blank"
            rel="external"
          >
            <strong>AltSchool</strong>
          </Link>{" "}
          (an EdTech startup) where I helped create a{" "}
          <strong>Learning Management System</strong> that empowered teachers to
          make more personalized curriculums and focus on whole-child education.
          I’ve done product design and strategy consulting for several startups,
          such as{" "}
          <Link
            href="https://www.lyrahealth.com/"
            target="_blank"
            rel="external"
          >
            <strong>Lyra Health</strong>
          </Link>{" "}
          and{" "}
          <Link href="https://amplify.com/" target="_blank" rel="external">
            <strong>Amplify</strong>
          </Link>
          , and freelanced for product strategy agencies such as{" "}
          <Link href="https://machine.io/" target="_blank" rel="external">
            <strong>Machine</strong>
          </Link>{" "}
          and{" "}
          <Link href="https://www.runyon.io/" target="_blank" rel="external">
            <strong>Runyon</strong>
          </Link>
          . Before I got into product design I was the creative director at{" "}
          <Link href="https://onia.com/" target="_blank" rel="external">
            <strong>Onia</strong>
          </Link>
          , a high-end clothing brand based in NYC.
        </p>
      </div>

      <div className="mt-12 font-xanh-mono text-lg">
        alexhollender@gmail.com
      </div>
    </div>
  );
}

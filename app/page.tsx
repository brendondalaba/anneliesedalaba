import Image from "next/image";

type Book = {
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  link: string;
  tag?: string;
};

const arrangedMarriageSeries: Book[] = [
  {
    title: "Reluctant To Wed",
    subtitle: "Arranged Marriage Series | Book 1",
    description:
      "To save her family's farm, Emma crosses the ocean to marry an English earl--hoping duty might still lead to love.",
    cover: "/RTW-2026.jpg",
    link: "https://amzn.to/3BwOTG5",
  },
  {
    title: "The Marriage Maneuver",
    subtitle: "Arranged Marriage Series | Book 2",
    description:
      "A viscount scarred by war and a daughter of nobility thrust into an unexpected union must decide if love can grow in the midst of deception.",
    cover: "/TMM-2026.jpg",
    link: "https://amzn.to/3uUyxGa",
  },
  {
    title: "Ties That Bind",
    subtitle: "Arranged Marriage Series | Book 3",
    description:
      "When a snowstorm and an unexpected inheritance force Kitty into an uneasy alliance with Viscount Runswick, trust becomes the highest stake.",
    cover: "/TTB-2026.jpg",
    link: "https://amzn.to/3gYzULO",
  },
];

const otherBooks: Book[] = [
  {
    title: "Facing Tomorrow Without You",
    subtitle: "Hope and Healing for the Grieving",
    description:
      "A tender memoir of love, loss, and choosing to trust God for comfort one honest question at a time.",
    cover:
      "https://cdn.prod.website-files.com/610c2b82a3a45a9b97d76fb4/6495bff3ddf4e6040e6bb9d1_ftwy-web-iamge.jpg",
    link: "https://amzn.to/42msMxO",
    tag: "Reader Favorite",
  },
  {
    title: "Patient #1",
    subtitle: "Embracing Hope in Times of Despair",
    description:
      "The true story of Greg's COVID-19 battle as the first intubated patient at his local hospital, and the faith-filled community that rallied when medicine seemed to have no answers.",
    cover:
      "https://cdn.prod.website-files.com/610c2b82a3a45a9b97d76fb4/66f9b85229dfadef4a99929d_Screenshot%202024-09-29%20at%204.20.51%E2%80%AFPM.png",
    link: "https://amzn.to/4gIAoTW",
  },
];

function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl bg-white/80 p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(8,47,73,0.55)]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
            src={book.cover}
            alt={`${book.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px, 360px"
            className="object-cover"
          />
        {book.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            {book.tag}
          </span>
        ) : null}
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          {book.subtitle}
        </p>
        <h3 className="font-display text-2xl text-slate-900">{book.title}</h3>
        <p className="text-sm leading-6 text-slate-600">{book.description}</p>
        <a
          href={book.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <span>Purchase on Amazon</span>
          <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fdf8f3] via-white to-[#f2f6fb] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-[32rem] bg-gradient-to-br from-amber-100/70 via-rose-50/50 to-sky-100/60 blur-3xl" />
      <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 lg:px-10 lg:pt-16">

        {/* â”€â”€ Hero â”€â”€ */}
        <header className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 ring-1 ring-amber-100">
              Anneliese Dalaba | Author
            </div>
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
              Faith-filled historical romance and uplifting memoirs.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Thanks so much for stopping by to learn more about my books! I love writing clean, faith-filled historical romances—often with a little suspense sprinkled in—and stories that leave you with a smile. I also write Christian nonfiction.

If you’d like fun facts, news, updates, and giveaway info delivered right to your inbox, be sure to sign up for my newsletter!
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#books"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore the books
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Join the newsletter
              </a>
            </div>
          </div>

          {/* Author photo + badge */}
          <div className="flex w-full flex-col gap-4 lg:w-80 lg:shrink-0">
            <div className="relative overflow-hidden rounded-3xl bg-white/75 p-4 shadow-[0_25px_60px_-45px_rgba(8,47,73,0.45)] ring-1 ring-slate-200/80 backdrop-blur">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl">
                <Image
                  src="/adalaba-welcome-img.jpg"
                  alt="Author Anneliese Dalaba"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 space-y-1 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Connect
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <a
                    href="https://www.facebook.com/anneliesedalaba"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/author_anneliese_dalaba?igsh=dGFkYW81eHlubzI4&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* â”€â”€ Arranged Marriage Series â”€â”€ */}
        <section id="books" className="mt-16 space-y-8 lg:mt-20">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Spotlight
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl text-slate-900">
                The Arranged Marriage Series
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                <span aria-hidden>★</span> Award-winning
              </span>
            </div>
            <p className="max-w-3xl text-base leading-7 text-slate-700">
              All-new covers, same faith-filled Regency romance with courage,
              intrigue, and steadfast love.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {arrangedMarriageSeries.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </section>

        {/* â”€â”€ Other Books â”€â”€ */}
        <section className="mt-16 space-y-8 lg:mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                More Books
              </p>
              <h2 className="font-display text-3xl text-slate-900">
                Memoir and latest release
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-700">
                Honest reflections and a powerful true story of faith through
                crisis--ordered so you can move from comfort to courage.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherBooks.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </section>

        {/* â”€â”€ Newsletter â”€â”€ */}
        <section
          id="newsletter"
          className="mt-16 rounded-3xl bg-white/85 p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70 backdrop-blur lg:mt-20 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Newsletter
              </p>
              <h2 className="font-display text-3xl text-slate-900">
                Be the first to hear about releases and giveaways.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-700">
                Occasional notes with launch news, behind-the-scenes stories,
                reader bonuses, and giveaway announcements. I respect your inbox
                and keep every update meaningful.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_25px_60px_-45px_rgba(8,47,73,0.7)]">
              <form
                action="https://anneliesedalaba.us15.list-manage.com/subscribe/post?u=f530440a7f085f06a49258d97&id=7264c2e3d8"
                method="post"
                target="_blank"
                className="space-y-4"
              >
                <label className="space-y-1 text-sm font-semibold text-white/90">
                  Email address
                  <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      name="EMAIL"
                      required
                      placeholder="you@example.com"
                      className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-base font-medium text-white placeholder:text-white/60 shadow-inner focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                    />
                    <button
                      type="submit"
                      className="w-full shrink-0 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-50 sm:w-auto"
                    >
                      Subscribe
                    </button>
                  </div>
                </label>
                <p className="text-xs leading-5 text-white/70">
                  No spam--just thoughtful updates, launch details, and the
                  occasional giveaway for subscribers.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-12 pb-8 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Anneliese Dalaba. All rights reserved.
      </footer>
    </div>
  );
}

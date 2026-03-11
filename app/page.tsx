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
    title: "Ties That Bind",
    subtitle: "Arranged Marriage Series | Book 3",
    description:
      "When a snowstorm and an unexpected inheritance force Kitty into an uneasy alliance with Viscount Runswick, trust becomes the highest stake.",
    cover:
      "https://cdn.prod.website-files.com/610c2b82a3a45a9b97d76fb4/62094d79b83c5c112c92390f_TTB%20ebook%20cover-72dpi-1500x2000-4.jpeg",
    link: "https://amzn.to/3gYzULO",
  },
  {
    title: "The Marriage Maneuver",
    subtitle: "Arranged Marriage Series | Book 2",
    description:
      "A viscount scarred by war and a daughter of nobility thrust into an unexpected union must decide if love can grow in the midst of deception.",
    cover:
      "https://cdn.prod.website-files.com/610c2b82a3a45a9b97d76fb4/62094dfb1ddc6cab9aa10f40_the-marriage-maneuver.jpeg",
    link: "https://amzn.to/3uUyxGa",
  },
  {
    title: "Reluctant To Wed",
    subtitle: "Arranged Marriage Series | Book 1",
    description:
      "To save her family's farm, Emma crosses the ocean to marry an English earl--hoping duty might still lead to love.",
    cover:
      "https://cdn.prod.website-files.com/610c2b82a3a45a9b97d76fb4/62094d6676921ca2e91889aa_reluctant-to-wed.png",
    link: "https://amzn.to/3BwOTG5",
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
    <article className="group grid gap-4 rounded-3xl bg-white/80 p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(8,47,73,0.55)]">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-white to-sky-50">
        <div className="relative aspect-[3/4]">
          <Image
            src={book.cover}
            alt={`${book.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px, 360px"
            className="object-cover"
          />
        </div>
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
          <span aria-hidden className="text-base">→</span>
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
        <header className="grid items-center gap-12 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 ring-1 ring-amber-100">
              Anneliese Dalaba | Author
            </div>
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
              Faith-filled historical romance and uplifting memoirs.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Thank you for stopping by. I write clean, hope-filled stories that
              blend rich history, heartfelt suspense, and the kind of love that
              deepens faith. New releases, reader exclusives, and giveaways are
              always shared with my newsletter friends.
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
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="text-slate-700">Connect:</span>
              <a
                href="https://www.facebook.com/anneliesedalaba"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/90 px-3 py-1 font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/adalaba2017/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/90 px-3 py-1 font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="relative grid gap-4 lg:justify-self-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white/75 p-4 shadow-[0_25px_60px_-45px_rgba(8,47,73,0.45)] ring-1 ring-slate-200/80 backdrop-blur">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl">
                <Image
                  src="https://cdn.prod.website-files.com/610c2b82a3a45ac0fcd76fc8/63d59e75d8cef92cd0d15e39_IMG_1200.jpg"
                  alt="Author Anneliese Dalaba"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 space-y-1 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Welcome
                </p>
                <p className="font-display text-xl text-slate-900">
                  Stories that lean into courage, kindness, and grace.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-lg">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Award-winning
                </p>
                <p className="text-base font-semibold">
                  The Arranged Marriage series
                </p>
              </div>
              <span className="text-2xl" aria-hidden>
                ★
              </span>
            </div>
          </div>
        </header>

        <section id="books" className="mt-16 space-y-8 lg:mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Spotlight
              </p>
              <h2 className="font-display text-3xl text-slate-900">
                The Arranged Marriage series
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-700">
                All-new covers, same faith-filled Regency romance with courage,
                intrigue, and steadfast love. Start with Book 1 or savor the
                latest release--all three belong together.
              </p>
            </div>
            <a
              href={arrangedMarriageSeries[2].link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start with Book 1
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {arrangedMarriageSeries.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </section>

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
          <div className="grid gap-6 md:grid-cols-2">
            {otherBooks.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_25px_60px_-35px_rgba(8,47,73,0.65)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Journal & Updates
              </p>
              <h3 className="mt-3 font-display text-2xl">
                New reflections for readers
              </h3>
              <p className="mt-4 text-base leading-7 text-white/80">
                I share behind-the-scenes notes, encouragement, and book news
                with my newsletter first. Expect thoughtful updates rather than
                frequent emails.
              </p>
              <a
                href="#newsletter"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-50"
              >
                Join the list
              </a>
            </div>
          </div>
        </section>

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
                <label className="space-y-2 text-sm font-semibold text-white/90">
                  Email address
                  <input
                    type="email"
                    name="EMAIL"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-base font-medium text-white placeholder:text-white/60 shadow-inner focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  Subscribe
                </button>
                <p className="text-xs leading-5 text-white/70">
                  No spam--just thoughtful updates, launch details, and the
                  occasional giveaway for subscribers.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

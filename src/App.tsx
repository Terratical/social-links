import Avatar from "/assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <article className="min-w-[min(90%,20rem)] rounded-xl bg-(--bg-card) p-(--spacing-xl) text-center sm:min-w-[min(90%,25rem)] sm:p-(--spacing-2xl)">
        <figure className="flex flex-col items-center">
          <img
            className="w-24 rounded-full"
            src={Avatar}
            alt="Jessica Randall Profile Photo"
          />
          <figcaption className="mt-(--spacing-xl)">
            <h1 className="text-full-name">Jessica Randall</h1>
            <p className="text-location">London, United Kingdom</p>
          </figcaption>
        </figure>
        <p className="mt-(--spacing-xl) text-base text-(--text-white)">
          <q>Front-end developer and avid reader.</q>
        </p>
        <nav
          id="social-links"
          className="mt-(--spacing-xl) flex flex-col gap-(--spacing-lg)"
        >
          <a
            className="block rounded-lg bg-(--bg-btn) p-(--spacing-md) text-base font-bold"
            href="https://github.com"
          >
            GitHub
          </a>
          <a
            className="block rounded-lg bg-(--bg-btn) p-(--spacing-md) text-base font-bold"
            href="https://frontendmentor.io"
          >
            Frontend Mentor
          </a>
          <a
            className="block rounded-lg bg-(--bg-btn) p-(--spacing-md) text-base font-bold"
            href="https://linkedin.com"
          >
            LinkedIn
          </a>
          <a
            className="block rounded-lg bg-(--bg-btn) p-(--spacing-md) text-base font-bold"
            href="https://twitter.com"
          >
            Twitter
          </a>
          <a
            className="block rounded-lg bg-(--bg-btn) p-(--spacing-md) text-base font-bold"
            href="https://instagram.com"
          >
            Instagram
          </a>
        </nav>
      </article>
    </main>
  );
}

export default App;

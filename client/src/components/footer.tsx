export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-primary)] text-[color:var(--color-accent)] py-4 mt-12 w-full">
      <div className="container-default text-center text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a
          href="https://github.com/lisaj5472"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:opacity-90 transition-opacity"
        >
          GitHub
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://linkedin.com/in/lisaj5472"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:opacity-90 transition-opacity"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

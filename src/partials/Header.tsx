export function Header() {
  return (
    <header className="w-full py-6 bg-background">
      <div className="max-w-[66rem] mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap">
        <a href="/">
          <h1 className="text-4xl font-bold text-primary">Harisanker</h1>
        </a>

        <nav className="flex gap-6 text-sm md:text-[16px] md:font-semibold text-gray-200 [&>*:hover]:text-gray-400 [&>*]:transition-colors flex-wrap justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
          {
            // <a href="/posts/">Blogs</a>
          }
          <a href="https://github.com/harisanker10" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/harisankerkm/" target="_blank">
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

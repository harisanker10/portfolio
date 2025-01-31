import { Section } from "../components";

const Footer = () => (
  // <div className="text-foreground width-[100vw] mx-auto flex flex-col items-center justify-center bottom-0 border border-t-black gap-4">
  //   <p className="text-sm">&copy; {new Date().getFullYear()} Harisanker. All rights reserved.</p>
  //   <div className="flex justify-center gap-6 text-sm">
  //     <a href="https://github.com/harisanker10" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
  //       GitHub
  //     </a>
  //     <a href="https://linkedin.com/in/harisanker10" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
  //       LinkedIn
  //     </a>
  //     <a href="mailto:harisankerkm@gmail.com" className="hover:text-gray-400">
  //       Contact
  //     </a>
  //   </div>
  // </div>



  <footer className="bg-slate-800 w-full bottom-0 shadow-sm mt-auto">
    <Section>
      <div className="flex items-center justify-center">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {
            // <li>
            //   <a href="#" className="hover:underline me-4 md:me-6">About</a>
            // </li>
            // <li>
            //   <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            // </li>
            // <li>
            //   <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            // </li>
          }
          <li>
            <a href="mailto:harisankerkm@gmail.com" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </Section>
  </footer>

);

export { Footer };

import { Section } from "../components";

const Hero = () => (
  <Section>
    <img
      className="md:h-52 md:w-52 w-24 h-24 object-cover rounded-full float-right ml-5 mb-5"
      src="/assets/images/me_worst.webp"
      alt="Harisanker"
      loading="lazy"
    />
    <p className="text-[15px] md:text-[16px]">
      I’m a developer with good amount of knowledge in JavaScript and its
      ecosystems. I’ve spent the past year learning by building and
      experimenting with projects.
      <br />
      <br />
      Currently I'm building{" "}
      <a
        className="text-cyan-400 hover:underline"
        href="https://github.com/harisanker10/servel"
        target="_blank"
      >
        Servel
      </a>
      , a web hosting platform.
      <br />
      <br />I thrive on exploring new technologies and solving challenging
      problems. If you’re looking for someone who blends technical skill with a
      passion for innovation, let’s connect!
    </p>
  </Section>
);

export { Hero };

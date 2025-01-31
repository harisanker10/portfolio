import { ProjectCard, Section, Tags } from "../components";

const ProjectList = () => (
  <Section className="mt-10">
    <h2 className="text-2xl font-bold text-primary my-5">Projects</h2>
    <div className="flex flex-col gap-6">
      <ProjectCard
        name="Servel"
        description="Deploy Websites, Backends, and Docker images easily from your GitHub or DockerHub repositories."
        link="https://github.com/harisanker10/servel"
        githubUrl="https://github.com/harisanker10/servel"
        // img={{
        //   src: "/assets/images/project-web-design.png",
        //   alt: "Project Web Design",
        // }}
        category={
          <>
            <Tags color="FUCHSIA">Next.js</Tags>
            <Tags color="LIME">NestJs</Tags>
            <Tags color="SKY">Kubernetes</Tags>
            <Tags color="ROSE">Docker</Tags>
            <Tags color="EMERALD">gRPC</Tags>
            <Tags color="AMBER">Kafka</Tags>
            <Tags color="CYAN">MongoDB</Tags>
          </>
        }
      />
      <ProjectCard
        name="Sort Visualizer"
        link="https://sort-visualizer-4sv.pages.dev/"
        description="A visual representation of sorting algorithms"
        githubUrl="https://github.com/harisanker10/sort-visualizer"
        liveUrl="https://sort-visualizer-4sv.pages.dev/"
        category={
          <>
            <Tags color="VIOLET">React</Tags>
            <Tags color="TEAL">Tailwind</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

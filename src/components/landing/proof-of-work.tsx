import { projects } from "@/lib/projects-data";
import Container from "../common/container";
import Heading from "../common/Heading";
import ProjectCard from "./project-card";

export type { ProjectItem } from "@/lib/projects-data";

const ProofOfWork = () => {
  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Proof Of Work" />

      <div className="py-8 sm:py-4">
        <ProjectCard projects={projects} />
      </div>
    </Container>
  );
};

export default ProofOfWork;

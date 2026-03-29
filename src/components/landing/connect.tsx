import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../common/container";
import Heading from "../common/Heading";

const Connect = () => {
  return (
    <Container className="px-8 py-4">
      <Heading text="Let's Connect" />
      <div className="py-4 px-8 flex items-center gap-4 grayscale-50 gap-x-4 w-full">
        <a
          href="https://github.com/Priyanshudotdev"
          target="_blank"
          className="rounded-full p-1 hover:scale-[1.01] duration-300 transition ease-in"
          rel="noopener"
        >
          <FaGithub className="text-4xl text-muted-foreground" />
        </a>
        <a
          href="https://x.com/Priyanshudotdev"
          target="_blank"
          className="rounded-full p-1 hover:scale-[1.01] duration-300 transition ease-in"
          rel="noopener"
        >
          <FaTwitter className="text-4xl text-muted-foreground" />
        </a>
        <a
          href="https://linkedin.com/in/priyanshukayarkar"
          target="_blank"
          className="rounded-full p-1 hover:scale-[1.01] duration-300 transition ease-in"
          rel="noopener"
        >
          <FaLinkedin className="text-4xl text-muted-foreground" />
        </a>
      </div>
    </Container>
  );
};

export default Connect;

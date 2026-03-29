import Container from "../common/container";
import Heading from "../common/Heading";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const TechStack = () => {
  return (
    <Container className="py-4">
      <Heading className="px-4 sm:px-8" text="Tech Stack" />

      <div className="relaitve {py-4} flex flex-col items-center gap-4">
        <InfiniteMovingCards
          direction="left"
          pauseOnHover={true}
          speed="slow"
        />
      </div>
    </Container>
  );
};

export default TechStack;

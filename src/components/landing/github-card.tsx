import { useEffect, useState } from "react";
import GitHubActivity from "../ui/github-activity";
import Container from "../common/container";
import Heading from "../common/Heading";

const GithubContributionCard = () => {
  const username = "Priyanshudotdev";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Container className="px-8 py-4">
        <Heading text={`GitHub Contributions ● @${username}`} />
        <div className="py-8 flex flex-col items-center gap-4">
          <div className="h-40 w-full animate-pulse bg-muted rounded" />
        </div>
      </Container>
    );
  }

  return (
    <Container className="px-8 py-4">
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-block"
      >
        <Heading text={`GitHub Contributions ● @${username}`} />
      </a>
      <div className="py-8 flex flex-col items-center gap-4">
        <GitHubActivity 
          username={username} 
          className="w-full max-w-fit mx-auto border border-black/10 dark:border-white/10" 
        />
      </div>
    </Container>
  );
};

export default GithubContributionCard;

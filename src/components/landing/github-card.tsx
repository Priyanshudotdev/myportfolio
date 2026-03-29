import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Container from "../common/container";
import Heading from "../common/Heading";

const GithubContributionCard = () => {
  const _username = "Priyanshudotdev";
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Container className="px-8 py-4">
        <Heading text="GitHub Contributions ● @Priyanshudotdev" />
        <div className="py-8 flex flex-col items-center gap-4">
          <div className="h-[160px] w-full animate-pulse bg-muted rounded" />
        </div>
      </Container>
    );
  }

  return (
    <Container className="px-8 py-4">
      <Heading text="GitHub Contributions ● @Priyanshudotdev" />

      <div className="py-8 flex flex-col items-center gap-4">
        <GitHubCalendar
          username="Priyanshudotdev"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={
            typeof window !== "undefined" && window.innerWidth < 768 ? 5 : 9
          }
          year={2026}
          className={`hover:scale-[1.01] duration-300 transition ease-in ${
            typeof window !== "undefined" && window.innerWidth < 768
              ? "sm:hidden"
              : ""
          }`}
        />
      </div>
    </Container>
  );
};

export default GithubContributionCard;

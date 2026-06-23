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
          <div className="h-40 w-full animate-pulse bg-muted rounded" />
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
          theme={{
            light: ["#f5f5f5", "#d4d4d4", "#a3a3a3", "#737373", "#404040"],
            dark: ["#1a1a1a", "#404040", "#737373", "#a6a6a6", "#d9d9d9"],
          }}
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

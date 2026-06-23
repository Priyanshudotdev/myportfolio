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
        <div className="p-4 md:p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden w-full max-w-fit mx-auto">
          <GitHubCalendar
            username="Priyanshudotdev"
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={{
              light: ["#e5e5e5", "#c4c4c4", "#a3a3a3", "#737373", "#404040"],
              dark: ["#2a2a2a", "#505050", "#737373", "#a6a6a6", "#d9d9d9"],
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
      </div>
    </Container>
  );
};

export default GithubContributionCard;

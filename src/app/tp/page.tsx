"use client";

import Image from "next/image";
import Container from "@/components/common/container";
import Divider from "@/components/common/divider";
import Banner from "@/components/landing/banner";
import ExperienceSection from "@/components/landing/experience-section";
import GithubContributionCard from "@/components/landing/github-card";
import MyPlayground from "@/components/landing/my-playground";
import ProofOfWork from "@/components/landing/proof-of-work";
import TechStack from "@/components/landing/tech-stack";
import GradientButton from "@/components/ui/gradient-button";

export default function Home() {
  return (
    <Container className="min-h-screen h-full w-full">
      <ProfileSectionTp />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProofOfWork />
      <Divider />
      <GithubContributionCard />
      <Divider />
      <TechStack />
      <Divider />
      <MyPlayground />
      <Divider />
      {/* <QuoteCard /> */}
    </Container>
  );
}

const ProfileSectionTp = () => {
  return (
    <Container className="pb-8 relative w-full">
      <Banner
        text="Working... :D"
        url="https://i.pinimg.com/1200x/70/45/a5/7045a5d2381cc470ced04eb6a6db075d.jpg"
      />

      {/* Profile Section */}
      <div className="py-4 px-6 sm:px-8">
        <div className="relative -mt-14 mb-3 w-fit">
          <Image
            src="https://i.pinimg.com/1200x/30/56/46/305646250f1a6dd7411a0f72aa61e2ae.jpg"
            alt="profile"
            width={112}
            height={112}
            className="rounded-full object-cover w-28 h-28 shadow-md"
            priority
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-serif font-medium italic text-3xl sm:text-4xl">
              Priyanshu S. Kayarkar
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              20 · engineer · developer · builder
            </p>
          </div>
          <div className="flex gap-x-2 text-sm items-center">
            <GradientButton
              onClick={() =>
                window.open("https://github.com/Priyanshudotdev", "_blank")
              }
              className="px-4 py-2 text-xs rounded-full"
            >
              GitHub
            </GradientButton>
            <GradientButton
              onClick={() =>
                window.open("https://twitter.com/Priyanshudotdev", "_blank")
              }
              className="px-4 py-2 text-xs rounded-full"
            >
              X
            </GradientButton>
            <GradientButton
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/priyanshukayarkar",
                  "_blank",
                )
              }
              className="px-4 py-2 text-xs rounded-full"
            >
              LinkedIn
            </GradientButton>
            <GradientButton
              onClick={() =>
                window.open("https://pinterest.com/Priyanshudotdev", "_blank")
              }
              className="px-4 py-2 text-xs rounded-full"
            >
              Pinterest
            </GradientButton>
            <GradientButton
              onClick={() => window.open("https://goodreads.com", "_blank")}
              className="px-4 py-2 text-xs rounded-full"
            >
              Reads
            </GradientButton>
            <GradientButton
              onClick={() => window.open("https://spotify.com", "_blank")}
              className="px-4 py-2 text-xs rounded-full"
            >
              Spotify
            </GradientButton>
          </div>
        </div>
      </div>

      <Divider />

      {/* Desc */}
      <p className="py-2 px-8 text-muted-foreground">
        <span className="text-white">I build from zero.</span> Whether it's
        frontend, backend, full-stack applications, or AI-powered experiences, I
        work across the entire development lifecycle. From UI/UX to deployment
        to user feedback, I care less about technology debates and more about
        delivering results that people love using.
      </p>

      {/* Spotify Card */}
    </Container>
  );
};

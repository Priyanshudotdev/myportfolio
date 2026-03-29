"use client";

import Container from "@/components/common/container";
import Divider from "@/components/common/divider";
import Footer from "@/components/common/footer";
import ExperienceSection from "@/components/landing/experience-section";
import GithubContributionCard from "@/components/landing/github-card";
import MyPlayground from "@/components/landing/my-playground";
import ProfileSection from "@/components/landing/profile-section";
import ProofOfWork from "@/components/landing/proof-of-work";
import TechStack from "@/components/landing/tech-stack";
import { YouTubeMusicCard } from "@/components/ui/youtube-music-card";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Container className="boder-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <ProfileSection />
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
        {/* <Divider /> */}
        {/* <Connect /> */}
        <Footer />
        {/* <QuoteCard /> */}
        {/* <div className="flex items-center justify-center my-12">
          <TextHoverEffect text="Lets Go!" />
        </div> */}
      </Container>
    </div>
  );
}

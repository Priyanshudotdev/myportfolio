import type { ReactNode } from "react";

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string;
  description: ReactNode;
  detailedDescription?: ReactNode;
  link?: string;
  images?: string[];
  videoUrl?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "leadership-1",
    title: "Technical Head & Lead Organizer",
    organization: "Engineering India YCCE",
    date: "Jun 2025 - Jul 2026",
    type: "Leadership",
    description: (
      <>
        Lead organizer for one of Nagpur's largest student hackathons at{" "}
        <span className="text-foreground font-medium">IIIT Nagpur</span> under{" "}
        <span className="text-foreground font-medium">Abhyudaya 25.0</span>,
        coordinating{" "}
        <span className="text-foreground font-medium">
          100+ participating teams
        </span>
        ,{" "}
        <span className="text-foreground font-medium">
          16 industry problem statements
        </span>
        , HCLTech mentors, technical evaluations, judges, volunteers, and
        end-to-end event operations.
        <br />
        <span className="text-foreground font-medium">
          Planned and executed 5+ flagship technical and social initiatives
        </span>
        , including{" "}
        <span className="text-foreground font-medium">Gyaandeep 2.0</span>,{" "}
        <span className="text-foreground font-medium">
          Ultimate Socio-Technocrat
        </span>{" "}
        at <span className="text-foreground font-medium">YASH 25.0</span>,{" "}
        <span className="text-foreground font-medium">Rangittalim</span>, blood
        donation drives, and community outreach programs, collaborating with
        cross-functional teams, sponsors, faculty, and volunteers to deliver
        impactful experiences from planning to execution.
      </>
    ),
    detailedDescription: (
      <>
        <p className="mb-4">
          On <span className="font-medium">1st February 2025</span>, I served as
          one of the lead organizers for the{" "}
          <span className="font-medium">Abhyudaya 25.0 Hackathon</span>, hosted
          at <span className="font-medium">IIIT Nagpur</span> under Engineering
          India. The event brought together{" "}
          <span className="font-medium">100+ student teams</span>
          from across colleges to solve real-world challenges provided by
          industry. From early morning venue setup and participant registrations
          to coordinating volunteers and ensuring every session ran on schedule,
          I was involved in managing the event from start to finish.
        </p>

        <p className="mb-4">
          One of my primary responsibilities was overseeing the complete
          participant journey. This included managing registrations,
          verification, team onboarding, mentor coordination, handling
          last-minute changes, resolving operational bottlenecks, and ensuring
          seamless communication between participants, volunteers, judges, and
          organizers. Working alongside multiple organizing teams taught me how
          to execute large-scale events under pressure while maintaining a
          smooth experience for everyone involved.
        </p>

        <p className="mb-4">
          The hackathon featured{" "}
          <span className="font-medium">
            16 real-world industry problem statements
          </span>
          contributed by <span className="font-medium">HCLTech</span>. During
          the first round, teams presented their solution ideas before experts
          from the
          <span className="font-medium">
            {" "}
            Vishwamanthan Research Foundation
          </span>
          , after which shortlisted teams spent the rest of the day transforming
          their concepts into working prototypes. Coordinating technical
          evaluations, judging sessions, presentation schedules, and logistics
          while keeping the event running on time gave me invaluable experience
          in leadership, event management, problem-solving, and cross-functional
          collaboration.
        </p>

        <p className="mb-4">
          Looking back, Abhyudaya 25.0 was far more than just a hackathon it was
          my first opportunity to organize an event at this scale. It
          strengthened my ability to lead teams, make quick decisions under
          pressure, communicate effectively with diverse stakeholders, and
          execute complex operations with confidence. The experience
          fundamentally shaped how I approach leadership and project execution
          today.
        </p>
      </>
    ),
    link: "https://www.linkedin.com/posts/priyanshukayarkar_execution-is-everything-135-teams-16-problems-ugcPost-7430639807409745924-Cc-z/",
  },
  {
    id: "leadership-2",
    title: "President",
    organization: "Maadhyam",
    date: "2026",
    type: "Leadership",
    description: (
      <>
        Led the departmental magazine as{" "}
        <span className="text-foreground font-medium">
          President for the 2026 edition
        </span>
        , overseeing the entire editorial and publication process.
      </>
    ),
    detailedDescription: (
      <>
        <p className="mb-4">
          As President of Maadhyam for the 2026 edition, I led a
          cross-functional team of editors, designers, and developers to publish
          the departmental college magazine.
        </p>
        <p className="mb-4">
          My role involved managing the entire editorial timeline, coordinating
          with faculty advisors, and ensuring that the final publication met the
          highest standards of quality and design.
        </p>
      </>
    ),
  },
  {
    id: "design-1",
    title: "Design Team Member",
    organization: "Maadhyam & Yash 24.0",
    date: "2025",
    type: "Design",
    description: (
      <>
        Contributed{" "}
        <span className="text-foreground font-medium">
          graphic design and UI/UX work
        </span>{" "}
        for Maadhyam (2025 edition), Yash 24.0 festival, and the college Music
        Club.
      </>
    ),
    detailedDescription: (
      <>
        <p className="mb-4">
          During my time on the design team, I contributed to the visual
          identity and graphic assets for major college events and publications.
        </p>
        <p className="mb-4">
          My work included designing the layout and UI/UX for the 2025 edition
          of Maadhyam, creating promotional materials for the Yash 24.0
          festival, and designing assets for the college Music Club.
        </p>
      </>
    ),
  },
];

export const getAchievementById = (id: string): AchievementItem | undefined => {
  return achievements.find((achievement) => achievement.id === id);
};

"use client";

import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { Check } from "lucide-react";

const BUCKET_LIST_ITEMS = [
  { id: 1, text: "Get married", completed: false },
  // { id: 2, text: "Own a house", completed: false },
  // { id: 3, text: "Own a car", completed: false },
  // { id: 4, text: "Learn how to drive a car", completed: false },
  // { id: 5, text: "Visit the Amazon rainforest", completed: false },
  // { id: 6, text: "Go on a road trip", completed: true },
  // { id: 7, text: "Camp outside in a forest", completed: false },
  // { id: 8, text: "Run the NYC Marathon", completed: false },
  // { id: 9, text: "Run 100 km in one go", completed: false },
  // { id: 10, text: "Complete a marathon in under 3 hours", completed: false },
  // { id: 11, text: "Learn to swim", completed: true },
  // { id: 12, text: "Take my parents on a flight", completed: false },
  // { id: 13, text: "Produce a song", completed: false },
  // { id: 14, text: "Own a personal music room filled with instruments", completed: false },
  // { id: 15, text: "Read 1,000 books", completed: false },
  // { id: 16, text: "Make 25 free throws in a row", completed: false },
  // { id: 17, text: "Play a full team basketball match", completed: false },
  // { id: 18, text: "Score a goal in a football match", completed: true },
  // { id: 19, text: "Visit all 7 continents", completed: false },
  // { id: 20, text: "Learn to play the piano", completed: false },
  // { id: 21, text: "Write a book", completed: false },
  // { id: 22, text: "Learn to surf", completed: false },
  // { id: 23, text: "See the Northern Lights", completed: false },
  // { id: 24, text: "Go skydiving", completed: false },
  // { id: 25, text: "Learn to cook 10 dishes perfectly", completed: false },
  // { id: 26, text: "Visit Japan during cherry blossom season", completed: false },
  // { id: 27, text: "Climb a mountain over 4000m", completed: false },
  // { id: 28, text: "Learn a third language fluently", completed: false },
  // { id: 29, text: "Start a business", completed: false },
  // { id: 30, text: "Mentor someone", completed: false },
];

export default function BucketListPage() {
  const completedCount = BUCKET_LIST_ITEMS.filter((item) => item.completed).length;
  const totalCount = BUCKET_LIST_ITEMS.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="relative w-full min-h-screen">
      <Container className="border-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <PageNavigation className="pt-4 px-4 sm:px-6" />
        <div className="px-6 sm:px-8 py-12">
          <div className="mb-8">
            <h1 className="font-serif italic text-4xl sm:text-5xl text-foreground mb-4">
              My Bucket List
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              Thought on: Arpil 7, 2023
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Note: I&apos;ve intentionally chosen not to add or remove anything from this list. It captures who I am right now and what <span className="text-white/90">I hope to achieve before I turn 100.</span>
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-foreground">
                Completed {completedCount} of {totalCount} ({progressPercentage}%)
              </span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[200px]">
                <div
                  className="h-full bg-foreground rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pb-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BUCKET_LIST_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`
                  flex items-start gap-3 p-4 rounded-lg border transition-all duration-200
                  ${
                    item.completed
                      ? "bg-foreground/10 border-foreground/20 dark:bg-white/10 dark:border-white/20"
                      : "bg-muted/30 border-muted hover:bg-muted/50"
                  }
                `}
              >
                <div
                  className={`
                    shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5
                    ${
                      item.completed
                        ? "bg-foreground border-foreground dark:bg-white dark:border-white"
                        : "border-muted-foreground/30"
                    }
                  `}
                >
                  {item.completed && (
                    <Check className="w-3 h-3 text-background dark:text-background" strokeWidth={3} />
                  )}
                </div>
                <span
                  className={`
                    text-sm leading-relaxed
                    ${
                      item.completed
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

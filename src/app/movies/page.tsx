"use client";

import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { Star, Film, Play } from "lucide-react";

const MOVIES = [
  { id: 1, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 5, watched: true },
  { id: 2, title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 5, watched: true },
  { id: 3, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 5, watched: true },
  { id: 4, title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 5, watched: true },
  { id: 5, title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, rating: 4, watched: true },
  { id: 6, title: "Inception", director: "Christopher Nolan", year: 2010, rating: 5, watched: true },
  { id: 7, title: "Fight Club", director: "David Fincher", year: 1999, rating: 4, watched: true },
  { id: 8, title: "The Matrix", director: "Lana & Lilly Wachowski", year: 1999, rating: 5, watched: true },
  { id: 9, title: "Goodfellas", director: "Martin Scorsese", year: 1990, rating: 5, watched: true },
  { id: 10, title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 5, watched: true },
  { id: 11, title: "The Silence of the Lambs", director: "Jonathan Demme", year: 1991, rating: 4, watched: true },
  { id: 12, title: "Se7en", director: "David Fincher", year: 1995, rating: 4, watched: true },
  { id: 13, title: "Dune: Part Two", director: "Denis Villeneuve", year: 2024, rating: 5, watched: false },
  { id: 14, title: "Oppenheimer", director: "Christopher Nolan", year: 2023, rating: 5, watched: true },
  { id: 15, title: "The Grand Budapest Hotel", director: "Wes Anderson", year: 2014, rating: 4, watched: true },
  { id: 16, title: "Spirited Away", director: "Hayao Miyazaki", year: 2001, rating: 5, watched: true },
  { id: 17, title: "The Departed", director: "Martin Scorsese", year: 2006, rating: 4, watched: true },
  { id: 18, title: "Whiplash", director: "Damien Chazelle", year: 2014, rating: 5, watched: true },
  { id: 19, title: "The Prestige", director: "Christopher Nolan", year: 2006, rating: 5, watched: true },
  { id: 20, title: "Parasite", director: "Bong Joon-ho", year: 2019, rating: 5, watched: true },
];

export default function MoviesPage() {
  const watchedCount = MOVIES.filter((movie) => movie.watched).length;
  const totalCount = MOVIES.length;
  const progressPercentage = Math.round((watchedCount / totalCount) * 100);
  const averageRating = MOVIES.filter((m) => m.watched).reduce((acc, m) => acc + m.rating, 0) / watchedCount;

  return (
    <div className="relative w-full min-h-screen">
      <Container className="border-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <PageNavigation className="pt-4 px-4 sm:px-6" />
        <div className="px-6 sm:px-8 py-12">
          <div className="mb-8">
            <h1 className="font-serif italic text-4xl sm:text-5xl text-foreground mb-4">
              My Movie Collection
            </h1>
            
            <p className="text-sm text-muted-foreground mb-6">
              A curated list of films that have shaped my perspective on storytelling and cinema.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Note: This is a living collection of movies I&apos;ve watched or plan to watch. <span className="text-white/90">Each film here has left a lasting impression or is on my must-watch list.</span>
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-foreground">
                Watched {watchedCount} of {totalCount} ({progressPercentage}%)
              </span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden w-[100px]">
                <div
                  className="h-full bg-foreground rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-foreground text-foreground" />
              <span>Avg Rating: {averageRating.toFixed(1)}/5</span>
            </div>
          </div>

          <div className="pb-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOVIES.map((movie) => (
              <div
                key={movie.id}
                className={`
                  flex flex-col p-4 rounded-lg border transition-all duration-200
                  ${
                    movie.watched
                      ? "bg-foreground/5 border-foreground/10 dark:bg-white/5 dark:border-white/10"
                      : "bg-muted/30 border-muted hover:bg-muted/50"
                  }
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Film className={`w-4 h-4 ${movie.watched ? "text-foreground" : "text-muted-foreground"}`} />
                    <span className="text-xs text-muted-foreground">{movie.year}</span>
                  </div>
                  {!movie.watched && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      To Watch
                    </span>
                  )}
                </div>
                
                <h3 className="text-sm font-medium text-foreground mb-1 leading-tight">
                  {movie.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {movie.director}
                </p>
                
                {movie.watched && (
                  <div className="flex items-center gap-1 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < movie.rating
                            ? "fill-foreground text-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

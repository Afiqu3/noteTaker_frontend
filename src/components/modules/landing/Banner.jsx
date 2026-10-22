"use client";

import { ArrowRight, BookOpen, PenTool, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            New: AI-powered note suggestions now available
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 delay-100">
            Capture Ideas,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Organize Thoughts
            </span>{" "}
            <br />
            Build Knowledge
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-200">
            A powerful note-taking platform designed for thinkers, writers, and
            creators. Create rich notes, organize with tags, and share your
            knowledge with the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 delay-300">
            <Link href="/register">
              <Button size="lg" className="gap-2" data-icon="inline-end">
                Get Started Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/posts">
              <Button variant="outline" size="lg">
                Explore Posts
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 delay-400">
          <FeatureCard
            icon={PenTool}
            title="Rich Notes"
            description="Create beautiful notes with markdown support, code blocks, and rich formatting."
          />
          <FeatureCard
            icon={BookOpen}
            title="Smart Organization"
            description="Tag, search, and filter your notes effortlessly. Never lose an idea again."
          />
          <FeatureCard
            icon={Users}
            title="Share & Collaborate"
            description="Publish posts, share with teams, and build your knowledge base together."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        aria-hidden="true"
      />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

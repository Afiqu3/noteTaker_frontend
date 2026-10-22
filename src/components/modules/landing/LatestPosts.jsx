"use client";

import { formatDistanceToNow } from "date-fns";
import { Calendar, Clock, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hook";

export default function LatestPosts() {
  const { data, isLoading, error } = usePosts({ page: 1, limit: 6 });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Latest Posts
            </h2>
            <Button variant="ghost" size="sm">
              <Loader2
                className="h-4 w-4 animate-spin mr-2"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <PostCardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Failed to load posts</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </section>
    );
  }

  const posts = data?.data || [];

  if (posts.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ExternalLink
                className="h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No posts yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to share your thoughts with the community.
            </p>
            <Link href="/posts">
              <Button>Browse Posts</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Latest Posts
            </h2>
            <p className="text-muted-foreground mt-1">
              Fresh perspectives from our community
            </p>
          </div>
          <Link href="/posts">
            <Button variant="outline" size="sm" data-icon="inline-end">
              View All
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {data?.pagination && data.pagination.total > 6 && (
          <div className="mt-10 text-center">
            <Link href="/posts">
              <Button variant="outline" size="lg">
                View All Posts
                <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function PostCard({ post }) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
        <time dateTime={post.createdAt}>
          <Calendar className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </time>
        {post.author && (
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.author.name}
          </span>
        )}
      </div>

      <Link href={`/posts/${post.id}`} className="block flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
          {post.content.replace(/[#*`[\]()]/g, "").slice(0, 160)}...
        </p>
      </Link>

      <div className="pt-4 border-t border-border">
        <Link
          href={`/posts/${post.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read more
          <ExternalLink
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

function PostCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-background p-6 animate-pulse">
      <div className="h-4 w-3/4 bg-muted rounded mb-4" />
      <div className="h-6 w-full bg-muted rounded mb-2" />
      <div className="h-6 w-5/6 bg-muted rounded mb-2" />
      <div className="h-4 w-full bg-muted rounded mt-4 mb-2" />
      <div className="h-4 w-3/4 bg-muted rounded" />
      <div className="h-4 w-1/2 bg-muted rounded mt-6" />
    </article>
  );
}

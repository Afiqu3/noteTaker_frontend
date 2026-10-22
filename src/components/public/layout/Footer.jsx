"use client";

import {
  Code2,
  GitBranch,
  Heart,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "Community", href: "/community" },
      { label: "Help Center", href: "/help" },
      { label: "API Reference", href: "/api-docs" },
      { label: "Status", href: "/status" },
      { label: "Security", href: "/security" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { icon: GitBranch, href: "https://github.com", label: "GitHub" },
    { icon: MessageSquare, href: "https://twitter.com", label: "Twitter" },
    { icon: Users, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@notetaker.app", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="font-bold text-xl text-foreground"
              aria-label="NoteTaker Home"
            >
              NoteTaker
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Capture ideas, organize thoughts, and build your knowledge base.
              The note-taking platform for thinkers and creators.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Built with{" "}
              <span className="flex inline-items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" aria-hidden="true" />
                <Code2 className="h-3 w-3" aria-hidden="true" />
              </span>{" "}
              by the NoteTaker team
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NoteTaker. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/cookies"
                className="hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>v1.0.0</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                Beta
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import personalInfo from "@/data/personalInfo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold">{personalInfo.name}</p>
          <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/60 hover:text-primary"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
          {personalInfo.github ? (
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </li>
          ) : null}
          {personalInfo.linkedin ? (
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </li>
          ) : null}
        </ul>
      </div>

      <div className="border-t border-border">
        <p className="section-shell py-5 text-center text-xs text-muted-foreground">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

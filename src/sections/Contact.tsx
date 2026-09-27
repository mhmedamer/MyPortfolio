import { type FormEvent, useState, useRef } from "react";
import emailJs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Pointer } from "lucide-react";
import personalInfo from "@/data/personalInfo";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cursorTo } from "node:readline";

const EMAILJS_SERVICE_ID = "service_6we4p4c";
const EMAILJS_TEMPLATE_ID = "template_zr9zgwm";
const EMAILJS_PUBLIC_KEY = "fIlOIFYgMXrmoUEp7";

export function Contact() {
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);
    setNotice("");

    emailJs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setNotice("Message sent successfully! I'll get back to you right away");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setNotice(
          "Something went wrong while sending. Please try again or reach me by email directly",
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  const details = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phoneDisplay,
      href: `tel:${personalInfo.phone}`,
      external: false,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: personalInfo.phoneDisplay,
      href: `https://wa.me/${personalInfo.whatsapp}`,
      external: true,
    },
    ...(personalInfo.github
      ? [
          {
            icon: Github,
            label: "GitHub",
            value: "GitHub profile",
            href: personalInfo.github,
            external: true,
          },
        ]
      : []),
    ...(personalInfo.linkedin
      ? [
          {
            icon: Linkedin,
            label: "LinkedIn",
            value: "LinkedIn profile",
            href: personalInfo.linkedin,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="section-shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="If you have a project, opportunity, or simply want to connect, feel free to reach out."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-3" data-reveal>
            {details.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="card-surface card-hover flex items-center gap-4 p-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium">{item.value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="card-surface flex items-center gap-4 p-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Country
                </span>
                <span className="block text-sm font-medium">{personalInfo.location}</span>
              </span>
            </li>
          </ul>

          <form ref={formRef} onSubmit={handleSubmit} className="card-surface p-6" data-reveal>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-sm transition-colors focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full cursor-pointer" disabled={isSending}>
                {isSending ? "sending..." : "Send Message"}
              </Button>
              <p
                className="text-xs leading-relaxed text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {notice}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

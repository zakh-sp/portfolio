import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import BrandIcon from "src/components/ui/BrandIcon/BrandIcon";
import Button from "src/components/ui/Button/Button";
import Reveal from "src/components/ui/Reveal/Reveal";
import { profile, socials } from "src/data/profile";
import { lineReveal, stagger, viewportOnce } from "src/lib/motion";
import styles from "./Contact.module.less";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden />

          <div className={styles.left}>
            <p className={styles.eyebrow}>
              <span className={styles.rule} />
              07 — Contact
            </p>
            <motion.h2
              className={styles.title}
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {["Have something", "worth building?"].map((line, i) => (
                <span key={line} className={styles.mask}>
                  <motion.span
                    className={i === 1 ? styles.accent : styles.line}
                    variants={lineReveal}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
            <Reveal>
              <p className={styles.lead}>
                Whether it&apos;s a role, a side project or just a good engineering conversation —
                my inbox is open. I usually reply within a couple of days.
              </p>
            </Reveal>

            <Reveal className={styles.details} delay={0.1}>
              <button type="button" className={styles.detail} onClick={copyEmail}>
                <span className={styles.detailIcon}>
                  <Mail />
                </span>
                <span className={styles.detailText}>{profile.email}</span>
                <span className={styles.copy}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "done" : "copy"}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      className={styles.copyIcon}
                    >
                      {copied ? <Check /> : <Copy />}
                    </motion.span>
                  </AnimatePresence>
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
              <a href={profile.phoneHref} className={styles.detail}>
                <span className={styles.detailIcon}>
                  <Phone />
                </span>
                <span className={styles.detailText}>{profile.phone}</span>
              </a>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <MapPin />
                </span>
                <span className={styles.detailText}>{profile.location}</span>
              </div>
            </Reveal>

            <Reveal className={styles.socials} delay={0.2}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <BrandIcon name={s.icon} />
                  {s.label}
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal preset="slideLeft" className={styles.right}>
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Your name</span>
                  <input name="name" required placeholder="Jane Doe" className={styles.input} />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={styles.input}
                  />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.label}>Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the project, the team or the idea…"
                  className={styles.textarea}
                />
              </label>
              <div className={styles.submit}>
                <Button type="submit" size="lg" icon={<Send />} magnetic>
                  Send message
                </Button>
                <AnimatePresence>
                  {sent && (
                    <motion.p
                      className={styles.note}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Your mail app should open now ✦
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

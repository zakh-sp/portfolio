import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "src/components/ui/Button/Button";
import { navLinks, profile } from "src/data/profile";
import { cx } from "src/lib/cx";
import { ease } from "src/lib/motion";
import styles from "./Navbar.module.less";

const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
};

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <>
      <motion.header
        className={cx(styles.navbar, scrolled && styles.scrolled)}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        <nav className={styles.inner} aria-label="Main">
          <a href="#top" className={styles.logo} aria-label={`${profile.name} — home`}>
            <span className={styles.mark}>SP</span>
            <span className={styles.wordmark}>
              {profile.firstName}
              <span className={styles.dot}>.</span>
            </span>
          </a>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cx(styles.link, active === link.id && styles.active)}
                >
                  {active === link.id && (
                    <motion.span layoutId="nav-pill" className={styles.pill} />
                  )}
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <Button href="#contact" size="md">
              Let&apos;s talk
            </Button>
          </div>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.sheet}
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease }}
          >
            <motion.ul
              className={styles.sheetLinks}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { ease, duration: 0.6 } },
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className={styles.sheetLink}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.sheetIndex}>0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a href={`mailto:${profile.email}`} className={styles.sheetEmail}>
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

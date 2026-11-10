import { ArrowUp } from "lucide-react";
import BrandIcon from "src/components/ui/BrandIcon/BrandIcon";
import Magnetic from "src/components/ui/Magnetic/Magnetic";
import { navLinks, profile, socials } from "src/data/profile";
import styles from "./Footer.module.less";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.giant} aria-hidden>
            {profile.firstName}
            <span className={styles.dot}>.</span>
          </p>
          <Magnetic>
            <a href="#top" className={styles.toTop} aria-label="Back to top">
              <ArrowUp />
            </a>
          </Magnetic>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {profile.name}. Designed &amp; built in Berlin.
          </p>
          <ul className={styles.nav}>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={styles.navLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={styles.social}
                >
                  <BrandIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

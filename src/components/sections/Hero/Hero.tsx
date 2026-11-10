import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import Button from "src/components/ui/Button/Button";
import Marquee from "src/components/ui/Marquee/Marquee";
import { marquee, profile } from "src/data/profile";
import { asset } from "src/lib/asset";
import { ease, fadeUp, lineReveal, scaleIn, stagger } from "src/lib/motion";
import styles from "./Hero.module.less";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className={styles.hero}>
      <div className={styles.blobs} aria-hidden>
        <motion.span
          className={styles.blobPear}
          animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className={styles.blobNavy}
          animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          variants={stagger(0.1, 0.2)}
          initial="hidden"
          animate="visible"
          style={{ y: textY, opacity: fade }}
        >
          <motion.div className={styles.status} variants={fadeUp}>
            <span className={styles.pulse} />
            {profile.role} @ {profile.company}
            <span className={styles.sep} />
            <MapPin className={styles.pin} />
            Berlin
          </motion.div>

          <h1 className={styles.title}>
            {profile.heroTitle.map((line, i) => (
              <span key={line} className={styles.mask}>
                <motion.span
                  className={i === 1 ? styles.accentLine : styles.line}
                  variants={lineReveal}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className={styles.intro} variants={fadeUp}>
            {profile.heroIntro}
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <Button href="#projects" size="lg" magnetic icon={<ArrowUpRight />}>
              See my work
            </Button>
            <Button href="#contact" size="lg" variant="ghost" magnetic>
              Get in touch
            </Button>
          </motion.div>

          <motion.ul className={styles.logos} variants={fadeUp}>
            <li className={styles.logosLabel}>Shipped at</li>
            {["Zalando", "AWS", "ThoughtSpot", "Cisco"].map((c) => (
              <li key={c} className={styles.logo}>
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.visual}
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1.2, ease }}
        >
          <div className={styles.ring} aria-hidden />
          <div className={styles.frame}>
            <motion.img
              src={asset("/images/hero.jpg")}
              alt={`Portrait of ${profile.name}`}
              className={styles.photo}
              style={{ y: photoY }}
            />
            <div className={styles.photoShade} />
          </div>

          <motion.div
            className={`${styles.badge} ${styles.badgeTop}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 1.1, duration: 0.6 },
              x: { delay: 1.1, duration: 0.6, ease },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className={styles.badgeValue}>7+</span>
            <span className={styles.badgeLabel}>
              years building
              <br />
              production software
            </span>
          </motion.div>

          <motion.div
            className={`${styles.badge} ${styles.badgeBottom}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.3, duration: 0.6 },
              x: { delay: 1.3, duration: 0.6, ease },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className={styles.badgeDot} />
            <span className={styles.badgeLabel}>
              <strong>15k MAU</strong> app
              <br />
              built from zero
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className={styles.scrollIcon}
        >
          <ArrowDown />
        </motion.span>
        Scroll
      </motion.a>

      <div className={styles.marquee}>
        <Marquee items={marquee} />
      </div>
    </section>
  );
}

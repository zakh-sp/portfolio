import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import { testimonials } from "src/data/profile";
import { cx } from "src/lib/cx";
import { ease } from "src/lib/motion";
import styles from "./Testimonials.module.less";

const AUTOPLAY_MS = 7000;

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80, filter: "blur(6px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -80,
    filter: "blur(6px)",
    transition: { duration: 0.4, ease },
  }),
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (delta: number) => setState(([i]) => [(i + delta + count) % count, delta > 0 ? 1 : -1]),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const t = testimonials[index];

  return (
    <section className={styles.testimonials} aria-label="Testimonials">
      <div className={styles.inner}>
        <SectionHeading
          index="05"
          eyebrow="Kind words"
          align="center"
          title={
            <>
              What people <em>say.</em>
            </>
          }
        />

        <div
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className={styles.mark} aria-hidden />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              className={styles.slide}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar}>{initials(t.name)}</span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.title}>{t.title}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => go(-1)}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <div className={styles.dots}>
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  className={cx(styles.dot, i === index && styles.dotActive)}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Show testimonial ${i + 1}`}
                >
                  {i === index && !paused && (
                    <motion.span
                      className={styles.dotFill}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

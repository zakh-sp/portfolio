import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import Tag from "src/components/ui/Tag/Tag";
import { experience } from "src/data/profile";
import { fadeUp, slideLeft, stagger, viewportOnce } from "src/lib/motion";
import styles from "./Experience.module.less";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title={
            <>
              From startup <em>to big tech.</em>
            </>
          }
          description="Seven years across a founding team, a data-analytics scale-up, networking at Cisco, cloud at AWS and logistics at Zalando."
        />

        <ol ref={listRef} className={styles.timeline}>
          <span className={styles.track} aria-hidden />
          <motion.span className={styles.progress} style={{ scaleY }} aria-hidden />

          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              className={styles.item}
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.span
                className={styles.node}
                variants={{
                  hidden: { scale: 0 },
                  visible: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  },
                }}
                aria-hidden
              >
                {i === 0 && <span className={styles.nodePulse} />}
              </motion.span>

              <motion.div className={styles.meta} variants={fadeUp}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.location}>
                  <MapPin />
                  {job.location}
                </span>
              </motion.div>

              <motion.article className={styles.card} variants={slideLeft}>
                <header className={styles.cardHead}>
                  <h3 className={styles.company}>
                    {job.company}
                    {i === 0 && <span className={styles.now}>Now</span>}
                  </h3>
                  <p className={styles.role}>{job.role}</p>
                </header>

                {job.summary && <p className={styles.summary}>{job.summary}</p>}

                {job.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {job.highlights.map((h) => (
                      <li key={h.slice(0, 32)}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.tags}>
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </motion.article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

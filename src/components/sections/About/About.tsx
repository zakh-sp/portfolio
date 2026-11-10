import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Counter from "src/components/ui/Counter/Counter";
import Reveal from "src/components/ui/Reveal/Reveal";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import Tag from "src/components/ui/Tag/Tag";
import { certifications, profile, stats } from "src/data/profile";
import { asset } from "src/lib/asset";
import { fadeUp, stagger, viewportOnce } from "src/lib/motion";
import styles from "./About.module.less";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Pragmatic engineer, <em>outcome-obsessed.</em>
            </>
          }
        />

        <div className={styles.grid}>
          <Reveal preset="slideRight" className={styles.media}>
            <div className={styles.photoWrap}>
              <img
                src={asset("/images/about.jpg")}
                alt={`${profile.name} on a sunny terrace by the sea`}
                className={styles.photo}
                loading="lazy"
              />
            </div>
            <div className={styles.caption}>
              <span className={styles.captionDot} />
              Based in {profile.location}
            </div>
          </Reveal>

          <div className={styles.body}>
            <motion.div
              className={styles.text}
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {profile.about.map((p) => (
                <motion.p key={p.slice(0, 24)} variants={fadeUp}>
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <Reveal className={styles.edu} delay={0.2}>
              <GraduationCap className={styles.eduIcon} />
              <div>
                <p className={styles.eduSchool}>{profile.education.school}</p>
                <p className={styles.eduDegree}>
                  {profile.education.degree} · {profile.education.years}
                </p>
              </div>
            </Reveal>

            <Reveal className={styles.certs} delay={0.3}>
              {certifications.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </Reveal>
          </div>
        </div>

        <motion.ul
          className={styles.stats}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((s) => (
            <motion.li key={s.label} className={styles.stat} variants={fadeUp}>
              <span className={styles.statValue}>
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "src/components/ui/Button/Button";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import Tag from "src/components/ui/Tag/Tag";
import TiltCard from "src/components/ui/TiltCard/TiltCard";
import { projects, socials } from "src/data/profile";
import { cx } from "src/lib/cx";
import { fadeUp, stagger, viewportOnce } from "src/lib/motion";
import styles from "./Projects.module.less";

const github = socials.find((s) => s.icon === "github")?.href ?? "#";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title={
              <>
                Things I&apos;ve <em>built.</em>
              </>
            }
            description="Products and platforms where the numbers moved. A mix of 0→1 builds, internal tools people actually chose to use, and side projects."
          />
        </div>

        <motion.ul
          className={styles.grid}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              className={cx(styles.cell, p.featured && styles.featured)}
              variants={fadeUp}
            >
              <TiltCard className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.top}>
                    <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.category}>{p.category}</span>
                  </div>

                  <div className={styles.main}>
                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.description}>{p.description}</p>
                  </div>

                  <div className={styles.bottom}>
                    <p className={styles.impact}>{p.impact}</p>
                    <div className={styles.tags}>
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`Open ${p.title}`}
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.more}>
          <Button href={github} external variant="outline" icon={<ArrowUpRight />} magnetic>
            More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

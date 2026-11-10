import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import { articles } from "src/data/profile";
import { fadeUp, stagger, viewportOnce } from "src/lib/motion";
import styles from "./Writing.module.less";

export default function Writing() {
  return (
    <section id="writing" className={styles.writing}>
      <div className={styles.inner}>
        <SectionHeading
          index="06"
          eyebrow="Writing"
          title={
            <>
              Notes on <em>engineering culture.</em>
            </>
          }
          description="I write about the human side of building software — tech debt, stand-ups, product partnerships and how senior engineers spend their week."
        />

        <motion.ul
          className={styles.list}
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {articles.map((a, i) => (
            <motion.li key={a.href} variants={fadeUp}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className={styles.row}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.text}>
                  <span className={styles.title}>{a.title}</span>
                  <span className={styles.excerpt}>{a.excerpt}</span>
                </span>
                <span className={styles.date}>{a.date}</span>
                <span className={styles.arrow}>
                  <ArrowUpRight />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

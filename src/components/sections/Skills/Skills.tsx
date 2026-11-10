import { motion } from "framer-motion";
import { Cloud, Code2, Server, Smartphone } from "lucide-react";
import SectionHeading from "src/components/ui/SectionHeading/SectionHeading";
import { skills } from "src/data/profile";
import { fadeUp, stagger, viewportOnce } from "src/lib/motion";
import styles from "./Skills.module.less";

const icons = [Code2, Server, Smartphone, Cloud];

const chip = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title={
            <>
              The whole stack, <em>end to end.</em>
            </>
          }
          description="Comfortable from pixel to pipeline. These are the tools I reach for most."
        />

        <motion.div
          className={styles.bento}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={group.title}
                className={styles.card}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardHead}>
                  <span className={styles.iconWrap}>
                    <Icon />
                  </span>
                  <span className={styles.count}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.title}>{group.title}</h3>
                <p className={styles.blurb}>{group.blurb}</p>
                <motion.ul className={styles.chips} variants={stagger(0.04, 0.2)}>
                  {group.items.map((item) => (
                    <motion.li key={item} className={styles.chip} variants={chip}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

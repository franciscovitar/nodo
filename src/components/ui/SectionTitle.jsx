"use client";

import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  size = "default",
  className = "",
}) {
  const classes = [
    styles.sectionTitle,
    align === "left" && styles.left,
    size === "small" && styles.small,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

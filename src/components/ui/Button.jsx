"use client";

import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  href,
  icon,
  external = true, // por defecto: si es link, abre en nueva pestaña
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    icon && styles.withIcon,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
    </>
  );

  // Si es link
  if (href) {
    const isExternal =
      external &&
      /^https?:\/\//i.test(href) &&
      !href.startsWith(window?.location?.origin || "");

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}

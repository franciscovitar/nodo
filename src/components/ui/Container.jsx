"use client";

export default function Container({
  children,
  className = "",
  size = "default",
  ...props
}) {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-6xl",
    large: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

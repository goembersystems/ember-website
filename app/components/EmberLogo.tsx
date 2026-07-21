import Image from "next/image";

type EmberLogoProps = {
  variant?: "mark" | "lockup";
  priority?: boolean;
  className?: string;
};

export default function EmberLogo({
  variant = "mark",
  priority = false,
  className = "",
}: EmberLogoProps) {
  if (variant === "lockup") {
    return (
      <Image
        src="/ember-logo.png"
        alt="Ember Systems"
        width={180}
        height={240}
        priority={priority}
        className={`h-auto w-[7.5rem] object-contain sm:w-36 ${className}`}
      />
    );
  }

  return (
    <Image
      src="/ember-mark.png"
      alt="Ember Systems"
      width={40}
      height={40}
      priority={priority}
      className={`h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 ${className}`}
    />
  );
}

import Image from "next/image";

type EmberLogoProps = {
  variant?: "mark" | "lockup";
  priority?: boolean;
  className?: string;
};

/** Intrinsic pixel size of public/ember-logo.png (cropped lockup). */
const LOCKUP_WIDTH = 977;
const LOCKUP_HEIGHT = 814;

/** Intrinsic pixel size of public/ember-mark.png. */
const MARK_SIZE = 512;

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
        width={LOCKUP_WIDTH}
        height={LOCKUP_HEIGHT}
        priority={priority}
        sizes="(max-width: 640px) 7rem, 8rem"
        className={`h-auto w-28 object-contain sm:w-32 ${className}`}
      />
    );
  }

  return (
    <Image
      src="/ember-mark.png"
      alt="Ember Systems"
      width={MARK_SIZE}
      height={MARK_SIZE}
      priority={priority}
      sizes="40px"
      className={`h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 ${className}`}
    />
  );
}

import Image from "next/image";

type LogoProps = {
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Logo({ alt, className, priority = false }: LogoProps) {
  return (
    <Image
      src="/brand/ajf-logo.png"
      alt={alt}
      width={819}
      height={748}
      priority={priority}
      className={className}
    />
  );
}

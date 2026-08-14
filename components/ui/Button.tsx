import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "gold" | "outline";
type ButtonSize = "default" | "sm" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

function buildClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string
) {
  const classes = ["btn", `btn-${variant}`];
  if (size !== "default") classes.push(`btn-${size}`);
  if (className) classes.push(className);
  return classes.join(" ");
}

export default function Button({
  variant = "gold",
  size = "default",
  icon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classNames = buildClassName(variant, size, className);
  const content = (
    <>
      {icon ? <i className={icon} /> : null}
      {children}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classNames} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classNames} {...buttonProps}>
      {content}
    </button>
  );
}

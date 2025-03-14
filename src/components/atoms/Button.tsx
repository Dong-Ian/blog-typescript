import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
}

const DefaultButton: React.FC<ButtonProps> = ({
  className,
  children,
  active = false,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className} ${active ? styles.active : ""}`}
      data-active={active}
      {...props}
    >
      {children}
    </button>
  );
};

interface SolidButtonProps extends ButtonProps {
  color: "main" | "gray" | "green" | "red";
}

const SolidButton: React.FC<SolidButtonProps> = ({
  className,
  children,
  active = false,
  color,
  ...props
}) => {
  return (
    <DefaultButton
      className={`${styles.solid} ${styles[color]} ${className}`}
      active={active}
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

interface GhostButtonProps extends ButtonProps {
  color: "main" | "gray" | "green" | "red";
}

const GhostButton: React.FC<GhostButtonProps> = ({
  className,
  children,
  active = false,
  color,
  ...props
}) => {
  return (
    <DefaultButton
      className={`${styles.ghost} ${styles[color]} ${className}`}
      active={active}
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

interface IconButtonProps extends Omit<SolidButtonProps, "color"> {
  color?: "gray" | "blue" | "green" | "red";
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  active = false,
  color = "gray",
  ...props
}) => {
  return (
    <DefaultButton
      className={`${styles.icon} ${styles[color]} ${className}`}
      active={active}
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

const Button = {
  Default: DefaultButton,
  Solid: SolidButton,
  Ghost: GhostButton,
  Icon: IconButton,
};

export default Button;

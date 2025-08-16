import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {SOCIAL_LINKS.map(({ name, icon: Icon, path }) => (
        <li key={name}>
          <Link
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} link`}
            className={iconStyles}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

import { Logo, MainCTA } from "components/MainCTA";
import { RefObject } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "assets/icons";
import "./Socials.scss";
import { TikTokIcon } from "assets/icons/TikTokIcon";

export const Socials = ({
  isMobile,
  ctaRef,
}: {
  isMobile: boolean;
  ctaRef: RefObject<HTMLDivElement>;
}) => {
  const links = [
    {
      name: "Red Letter Runaround Music Video",
      url: "https://www.youtube.com/watch?v=n0D2xUkKFQ8",
    },
    {
      name: "Break Your Neck Music Video",
      url: "https://www.youtube.com/watch?v=s8EQVnbvQDY",
    },
    {
      name: "Bandcamp",
      url: "https://smalltimenapoleon.bandcamp.com/album/subverted-expectations",
    },
    {
      name: "Our website",
      url: "https://smalltimenapoleon.com",
    },
  ];
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/smalltime_napoleon/",
      icon: <InstagramIcon />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/user/stnapoleonband",
      icon: <YoutubeIcon />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@smalltimenapoleon",
      icon: <TikTokIcon />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/smalltimenapoleonband",
      icon: <FacebookIcon />,
    },
    {
      name: "X",
      url: "https://twitter.com/stnapoleonband/",
      icon: <TwitterIcon />,
    },
  ];
  return (
    <div className="Socials">
      <MainCTA
        isMobile={isMobile}
        ctaRef={ctaRef}
        fullHeight
        showLogo={false}
      />
      <div className="Socials__overlay" />
      <div className="Socials__content">
        <div className="Socials__header">
          <div className="Socials__logo">
            <Logo />
          </div>
          <p>
            Standing over 24 feet tall, when stacked end to end, and weighing a
            combined 700 pounds, Small Time Napoleon is statistically one of the
            most measured bands to come out of Kentucky.
          </p>
        </div>
        <div>
          <div className="Socials__links">
            {links.map((link) => (
              <a
                target="_blank"
                rel="noreferrer"
                href={link.url}
                className="Socials__link"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="Socials__social-links">
          {socialLinks.map((link) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={link.url}
              className="Socials__social-link"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

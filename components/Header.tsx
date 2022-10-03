import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.youtube.com/arashhosseini"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/arashhosseini"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/arashhosseini"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}

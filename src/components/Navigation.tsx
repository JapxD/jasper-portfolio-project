import {
  faBriefcase,
  faEnvelope,
  faFileCode,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import NavbarItem from "./NavBarItem";

const Navigation = () => {
  return (
    <div className="relative flex flex-row grow shrink max-w-[50%] xl:max-w-[30%] content-center h-13 rounded-full overflow-hidden px-1 py-1 bg-accents shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
      <div
        className={`absolute top-1 bottom-1 bg-secondary rounded-l-full z-0 ${location.hash === "#home" ? "left-1 right-98" : ""}`}
      />
      <NavbarItem label="Home" to="#home" position="left" icon={faHome} />
      <NavbarItem label="Projects" to="#projects" icon={faBriefcase} />
      <NavbarItem label="Skills" to="#skills" icon={faFileCode} />
      <NavbarItem
        label="Contact"
        to="#contact"
        position="right"
        icon={faEnvelope}
      />
    </div>
  );
};

export default Navigation;

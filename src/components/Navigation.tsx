import {
  faBriefcase,
  faEnvelope,
  faFileCode,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavBarItem";

const Navigation = () => {
  return (
    <div className="flex flex-row h-13 w-[90%] max-w-[480px] rounded-full overflow-hidden px-1 py-1 bg-accents shadow-[4px_4px_4px_rgba(0,0,0,0.25)] inset-shadow-[6px_6px_4px_rgba(250,250,250.8)]">
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

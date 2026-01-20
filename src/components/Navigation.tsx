import {
  faBriefcase,
  faEnvelope,
  faFileCode,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavBarItem";

const Navigation = () => {
  return (
    <div className="flex flex-row w-[100%] h-13 max-w-[45%] xl:max-w-[25%] rounded-full overflow-hidden px-1 py-1 bg-accents shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
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

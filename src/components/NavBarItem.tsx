import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { useLocation, Link } from "react-router-dom";
import { forwardRef } from "react";

interface NavbarItemProps {
  label: string;
  to: string;
  icon: IconProp;
  position?: "left" | "right"; // optional and only allows "left" or "right"
}

const NavbarItem = ({ label, to, icon, position }: NavbarItemProps) => {
  const location = useLocation();
  const isActive = location.hash === to;

  return (
    <Link
      to={to}
      className={`z-10 flex flex-row grow items-center justify-center gap-1 transition-colors duration-300
        ${position === "left" ? "rounded-l-full" : position === "right" ? "rounded-r-full" : ""} 
        ${isActive ? "bg-secondary text-accents" : "bg-none text-secondary"}`}
    >
      <FontAwesomeIcon icon={icon} />
      <p className="hidden md:inline font-bold">{label}</p>
    </Link>
  );
};

export default NavbarItem;

import {
  faInstagram,
  faLinkedin,
  faUpwork,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Socials = () => {
  const links = {
    upwork: "https://www.upwork.com/freelancers/~0177c2ceaba26a100f",
    linkedin: "https://www.linkedin.com/in/jasper-garcia-a0b8963a6",
    youtube: "https://www.youtube.com/@jasper-garcia",
    instagram: "https://www.instagram.com/garciajaspermercado24",
  };
  return (
    <div className="xl:max-w-[30%] flex flex-row gap-10 flex-wrap items-center justify-center">
      <Link to={links.upwork} target="_blank">
        <FontAwesomeIcon className="text-secondary" icon={faUpwork} size="lg" />
      </Link>
      <Link to={links.linkedin} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faLinkedin}
          size="lg"
        />
      </Link>
      <Link to={links.youtube} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faYoutube}
          size="lg"
        />
      </Link>
      <Link to={links.instagram} target="_blank">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faInstagram}
          size="lg"
        />
      </Link>
    </div>
  );
};

export default Socials;

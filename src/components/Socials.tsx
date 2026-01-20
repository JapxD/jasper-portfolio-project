import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Socials = () => {
  const links = {
    upwork: "https://www.upwork.com/freelancers/~0177c2ceaba26a100f",
    linkedin: "https://www.linkedin.com/in/jasper-garcia-a0b8963a6/",
  };
  return (
    <div className="flex flex-row w-[100%] items-center justify-center gap-10 h-13 max-w-[50%] xl:max-w-[30%] rounded-full overflow-hidden px-1 py-1">
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
      <FontAwesomeIcon
        className="text-secondary"
        icon={faInstagram}
        size="lg"
      />
      <FontAwesomeIcon className="text-secondary" icon={faFacebook} size="lg" />
    </div>
  );
};

export default Socials;

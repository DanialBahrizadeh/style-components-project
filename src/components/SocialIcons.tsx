import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";
const SocialIcons: React.FC = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;

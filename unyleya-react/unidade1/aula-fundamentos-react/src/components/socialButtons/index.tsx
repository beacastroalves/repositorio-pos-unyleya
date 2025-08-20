import linkedin from '../../assets/images/linkedin.svg';
import insta from '../../assets/images/instagram.svg';

interface socialButtons {
  socialTypes: "linkedin" | "instagram";
}

const SocialButtons = ({ socialTypes }: socialButtons) => {
  if (socialTypes === "instagram") {
    return <img src={ insta } alt={`Logomarca do ${socialTypes} na cor branca`} />
  }
  return <img src={ linkedin } alt={`Logomarca do ${socialTypes} na cor branca`} />
};

export default SocialButtons;
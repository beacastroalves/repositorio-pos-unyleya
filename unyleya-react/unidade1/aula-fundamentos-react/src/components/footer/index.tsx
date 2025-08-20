import './style.css';
import SocialButtons from '../socialButtons';

const Footer = () => {
  return (
    <div className='container-footer'>
      <h2>Unyleya | Todos os direitos reservados</h2>
      <div className='imgs-footer'>
        <SocialButtons socialTypes='linkedin'/>
        <SocialButtons socialTypes='instagram'/>
      </div>
    </div>
  )
}

export default Footer;
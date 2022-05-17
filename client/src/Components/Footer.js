import './Footer.css';
import githubIcon from '../Icons/github.png'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <p>copyrightⓒ Team GI-GO All right reserved.</p>
        <a href='https://github.com/codestates/whatever_discussion' target='_blank'>
          <img src={githubIcon} alt='accountIcon'></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
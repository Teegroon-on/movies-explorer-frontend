import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
        <div className='footer__content'>
          <p className='footer__origin-date'>&copy; {new Date().getFullYear()}</p>
          <nav>
            <ul className='footer__list'>
              <li>
                <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a className='footer__link' href='https://github.com/Teegroon-on' target='_blank' rel='noreferrer'>
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

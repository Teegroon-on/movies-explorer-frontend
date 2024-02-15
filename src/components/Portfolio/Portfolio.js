import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__works-title'>Портфолио</h4>
      <ul className='portfolio__works'>
        <li className='portfolio__work'>
          <a
            href='https://github.com/Teegroon-on/how-to-learn'
            className='portfolio__work-link'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__work-link'
            href='https://teegroon-on.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__work-link'
            href='https://teegroon-on.github.io/mesto/'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;

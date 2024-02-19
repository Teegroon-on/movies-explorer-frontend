import './JobResume.css';

function JobResume() {
  return (
    <div className='job-resume'>
      <h4 className='job-resume__head-text'>Портфолио</h4>
      <ul className='job-resume__list'>
        <li className='job-resume__list-item'>
          <a
            href='https://github.com/Teegroon-on/how-to-learn'
            className='job-resume__list-item-link'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='job-resume__arrow'>↗</span>
          </a>
        </li>
        <li className='job-resume__work'>
          <a
            className='job-resume__work-link'
            href='https://teegroon-on.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='job-resume__arrow'>↗</span>
          </a>
        </li>
        <li className='job-resume__work'>
          <a
            className='job-resume__work-link'
            href='https://teegroon-on.github.io/mesto/'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='job-resume__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default JobResume;

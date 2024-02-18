import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/about-me-photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__content'>
      <a name="about-me"/>
        <SectionTitle text='Студент' />
        <div className='about-me__info'>
          <h3 className='about-me__title'>Сергей Калашников</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 25 лет</p>
          <p className='about-me__bio'>
            Родился в Астрахани, но рос и получал образование в Москве. Закончил МАДК им. Николаева по&nbsp;специальности
            программирование в компьюьерных системах, Получил степень бакалавра в МТУСИ на кафедре "Информационные системы
            и&nbsp;технологии". Работал в разных проектах. В данный момент работаю разработчиком в Tanto-S.
          </p>
          <a className='about-me__github-link' href='https://github.com/Teegroon-on' target='_blank' rel='noreferrer'>
            Github
          </a>
          <img className='about-me__photo' src={photo} alt='Фото автора проекта Movies-explorer' />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;

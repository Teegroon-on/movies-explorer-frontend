import SectionHeadText from '../SectionHeadText/SectionHeadText';
import JobResume from '../JobResume/JobResume';
import photo from '../../images/student-photo.jpg';
import './Student.css';

function Student() {
  return (
    <section className='student'>
      <div className='student__wrapper'>
      <a name="student"/>
        <SectionHeadText text='Студент' />
        <div className='student__content'>
          <h3 className='student__name'>Сергей Калашников</h3>
          <p className='student__job'>Фронтенд-разработчик, 25 лет</p>
          <p className='student__biography'>
            Родился в Астрахани, но рос и получал образование в Москве. Закончил МАДК им. Николаева по&nbsp;специальности
            программирование в компьюьерных системах, Получил степень бакалавра в МТУСИ на кафедре "Информационные системы
            и&nbsp;технологии". Работал в разных проектах. В данный момент работаю разработчиком в Tanto-S.
          </p>
          <a className='student__gh-link' href='https://github.com/Teegroon-on' target='_blank' rel='noreferrer'>
            Github
          </a>
          <img className='student__avatar' src={photo} alt='Фото автора проекта Movies-explorer' />
        </div>
        <JobResume />
      </div>
    </section>
  );
}

export default Student;

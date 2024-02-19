import SectionHeadText from '../SectionHeadText/SectionHeadText';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__wrapper'>
      <a name="tech"/>
        <SectionHeadText text='Технологии' />
        <h3 className='techs__head-text'>7&nbsp;технологий</h3>
        <p className='techs__sub-text'>
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>momgoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;

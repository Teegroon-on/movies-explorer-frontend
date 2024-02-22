import SectionHeadText from '../SectionHeadText/SectionHeadText';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='about__wrapper'>
      <a name="about"/>
        <SectionHeadText text='О проекте' />
        <ul className='about__text'>
          <li className='about__text-item'>
            <h3 className='about__text-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about__text-info'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
            </p>
          </li>
          <li className='about__text-item'>
            <h3 className='about__text-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about__text-info'>
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
              защититься.
            </p>
          </li>
        </ul>
        <ul className='about__diagram'>
          <li className='about__diagram-item'>
            <h4 className='about__diagram-title'>1&nbsp;неделя</h4>
            <p className='about__diagram-text'>Back-end</p>
          </li>
          <li className='about__diagram-item about__diagram-item_type_long'>
            <h4 className='about__diagram-title about__diagram-title_color_grey'>4&nbsp;недели</h4>
            <p className='about__diagram-text'>Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

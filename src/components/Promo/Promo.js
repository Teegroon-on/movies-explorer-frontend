import './Promo.css';
import promoImage from '../../images/header_decoration.svg';


function Promo() {
  return (
    <section className='promo'>
      <div className='promo__background'>
        <div className='promo__content'>
          <img className='promo__image' src={promoImage} alt='Изображение промо' />
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </div>
      </div>
      <div className='promo__sub-menu'>
        <a className='promo__sub-menu-item' href='#about'>О проекте</a>
        <a className='promo__sub-menu-item' href='#tech'>Технологии</a>
        <a className='promo__sub-menu-item' href='#student'>Студент</a>
      </div>
    </section>
  );
}

export default Promo;

import Promo from '../Promo/Promo';
import About from '../About/About';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <Promo />
      <About />
      <Techs />
      <Student />
    </main>
  );
}

export default Main;

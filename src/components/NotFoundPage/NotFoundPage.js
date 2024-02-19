import './NotFoundPage.css';

function NotFoundPage({ onNavigateToMain }) {
  return (
    <main className='not-found-page'>
      <section className='not-found-page__wrapper'>
        <h1 className='not-found-page__head-text'>404</h1>
        <p className='not-found-page__info'>Страница не найдена</p>
        <button type='button' className='not-found-page__button' onClick={onNavigateToMain}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;

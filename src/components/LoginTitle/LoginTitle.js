import './LoginTitle.css';

function LoginTitle({ headerText, place }) {
  return <h1 className={`login-title ${place === 'account' && 'login-title_place_account'}`}>{headerText}</h1>;
}

export default LoginTitle;

import "../App.css";

function Login() {
  return (
    <main>
      <div className="container">
        <div className="input-wrapper">
          <label htmlFor="username" className="input-label-username">
            Логин
          </label>
          <input type="text" id="username" className="input-login" placeholder="Введите логин"></input>
          <label htmlFor="password" className="input-label-password">
            Пароль
          </label>
          <input type="password" id="password" className="input-password" placeholder="Введите пароль"></input>
          <button className="login-btn">Войти</button>
        </div>
      </div>
    </main>
  );
}

export default Login;

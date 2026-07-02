import "../index.css";

function Login() {
  function login() {}
  return (
    <div>
      <form className="form">
        <h1>Login</h1>
        <input type="text" className="inp-username" placeholder="Username" />
        <br />
        <input
          type="password"
          className="inp-password"
          placeholder="Password"
        />
        <br />
        <button className="btn-login-submit btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

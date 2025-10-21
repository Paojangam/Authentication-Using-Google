import { Link } from "react-router-dom";
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc"; 


function Login() {
  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3 className="login-subtitle">Please enter your details</h3>
        <h1 className="login-title">Welcome back</h1>

        <form className="login-form">
          <input type="email" placeholder="Email address" className="input" />
          <input type="password" placeholder="Password" className="input" />

          <button type="submit" className="btn-primary">
            Sign in
          </button>

          <button type="button" className="btn-google" onClick={googleAuth}>
          <FcGoogle size={24} />  
          <span>Sign in with Google</span>
          </button>


          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

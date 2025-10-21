import { Link } from "react-router-dom";
import "../styles/Signup.css"; 
import { FcGoogle } from "react-icons/fc"; 

function Signup() {
  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h3 className="signup-subtitle">Create your account</h3>
        <h1 className="signup-title">Get started</h1>

        <form className="signup-form">
          <input type="text" placeholder="Username" className="input" />
          <input type="email" placeholder="Email address" className="input" />
          <input type="password" placeholder="Password" className="input" />

          <button type="submit" className="btn-primary">
            Sign up
          </button>

         <button type="button" className="btn-google" onClick={googleAuth}>
          <FcGoogle size={24} />  {/* Google icon */}
          <span>Sign up with Google</span>
          </button>

          <p className="login-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

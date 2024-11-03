// SignupForm.js
import {Link } from "react-router-dom";
import "./Signup.css";


function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign up</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Repeat your password" required />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" style={{color: 'wheat'}}>I agree all statements in <a href="#">Terms of service</a></label>
          </div>
          <button type="submit" className="register-button">Register</button>
          
            <Link to="/Login" className="LoginText"> Already user?</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;

import { useState } from "react";
// const axios = require("axios");
import { Link } from "react-router-dom";
// const res = await axios.post("https:sample-endpoint.com/data");

const AuthModal = ({ setShowModal, isSignUp }) => {
  // const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      const data = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      try {
        const res = await axios.post(
          "http://localhost:3000/user/sign-up",
          data
        );
        if (res.data.success) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      const data = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      try {
        const res = await axios.post(
          "http://localhost:3000/user/sign-in",
          data
        );
        if (res.data.Success) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "SIGN UP" : "LOG IN"}</h2>
      <h5>
        <i>
          Welcome to truelink! Make sure you are adhere to the privacy and
          safety regulations.
        </i>
      </h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <Link to="/onboarding">
          <input className="secondary-button" type="submit" />
        </Link>
        <p>{error}</p>
      </form>

      <hr />
      <h2>Blind Date Matchmaking & Event Hosting</h2>
    </div>
  );
};

export default AuthModal;

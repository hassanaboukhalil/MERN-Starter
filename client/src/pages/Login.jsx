import { Link, Form } from "react-router-dom";
import { Logo } from "../components";

const Login = () => {
  return (
    <Wrapper className="bg-white">
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <div className="form-control">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input bg-white"
            required
          />
        </div>
        <button className="btn w-full" type="submit">
          submit
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    background-color: #aeeb9e;
    padding: 1rem;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Login;

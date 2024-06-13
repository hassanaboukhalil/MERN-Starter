import styled from "styled-components";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper className="navbar gap-5 container">
      <Logo />
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink to={path} key={text} className="nav-link" end>
            <span className="icon pr-2">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--red-dark);
  color: white;
`;

export default Navbar;

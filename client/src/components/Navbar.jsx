import styled from "styled-components";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink to={path} key={text} className="nav-link" end>
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: blue;
`;

export default Navbar;

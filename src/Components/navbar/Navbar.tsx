import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { NavbarWrapper } from "./style";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const token = localStorage.getItem("token");

  return (
    <>
      <NavbarWrapper>
        {isHome && (
          <>
            <ScrollLink to="initial-page" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink
              to="differentials"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Diferenciais
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
              Sobre
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
              Contato
            </ScrollLink>
            <button
              onClick={() => navigate("/dashboard")}
            >
              {token ? "Dashboard" : "Entrar"}
            </button>
          </>
        )}
      </NavbarWrapper>
    </>
  );
}

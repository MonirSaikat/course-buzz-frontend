import React, { createRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";
import "./Navbar.css";

function Navbar() {
  const { user } = useAuth();
  const navRef = createRef();

  const links = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/courses",
      text: "Courses",
    },
    {
      to: "/community?key=all",
      text: "Community",
    },
    {
      to: user ? "/add-video" : "/sign-up",
      text: user ? "Add Video" : "Sign up",
    },
    {
      to: user ? "/profile" : "/sign-in",
      text: user ? "Profile" : "Sign In",
    },
  ];

  //   <Link
  //   className={`${
  //     navRef.current?.classList?.has('mobile')
  //       ? 'btn btn-primary'
  //       : ''
  //   }`}
  //   to={user ? '/profile' : '/sign-in'}
  // >
  //   {user ? 'navlinks.profile' : 'navlinks.signin'}
  // </Link>

  const renderLinks = links.map((link, idx) => {
    return (
      <li key={idx}>
        {" "}
        <Link to={link.to}>{link.text}</Link>{" "}
      </li>
    );
  });

  const toggleMenu = useCallback(() => {
    navRef.current.classList.toggle("mobile");
  }, [navRef]);

  useEffect(() => {
    const clickListener = window.addEventListener("click", function (e) {
      if (
        e.target.nodeName === "A" ||
        (!e.target.classList.contains("mobile") &&
          !e.target.classList.contains("toggler-img"))
      ) {
        navRef.current?.classList?.remove("mobile");
      }
    });

    return () => window.removeEventListener("click", clickListener);
  }, [navRef]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          Course<span>Buzz</span>
        </Link>

        <span className="navbar-toggler" onClick={toggleMenu}>
          <img src="/img/menu.svg" className="toggler-img" alt="" />
        </span>

        <div className="pc-menu" ref={navRef}>
          <ul>{renderLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

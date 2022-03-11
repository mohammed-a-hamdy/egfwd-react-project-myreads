import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

function Content(props) {
  return (
    <nav className="navbar has-background-light" role="navigation">
      <div className="navbar-brand">
        <img src={process.env.PUBLIC_URL + "/icon.png"} width="100"></img>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <h1 className="title block">My Reads Application</h1>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {props.pages.map((page) => (
                  <Link
                    to={page.link}
                    key={page.link}
                    className="button is-primary"
                    role="button"
                  >
                    <strong>{page.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Content;

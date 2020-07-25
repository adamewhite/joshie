import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Button from "./Button"

const HeaderStyles = styled.header`
  #navwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 750px;
    max-height: 70px;
    padding: 20px 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 10px 10px -10px black;
    color: white;
    font-family: "aktiv-grotesk-std", sans-serif;
    font-size: 15px;
    z-index: 29;
    /* border: 1px solid red; */
  }

  #info1 {
    font-weight: bold;
    color: white;
    font-family: "aktiv-grotesk-std", sans-serif;
    font-size: 15px;
  }

  #info3 {
  }

  #info3 ul {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  #info3 ul li a {
    font-family: "aktiv-grotesk-std", sans-serif;
    font-size: 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div id="navwrapper">
      <div>
        <Link to="/">
          <div id="info1" className="info">
            joshua graver
          </div>
        </Link>
      </div>

      <div id="info3">
        <ul>
          <li>
            <Link to="/">
              <Button name="recent(ish)" />
            </Link>
          </li>
          <li>
            <Link to="/print">
              <Button name="print" />
            </Link>
          </li>
          <li>
            <Link to="/motion">
              <Button name="motion" />
            </Link>
          </li>
          <li>
            <Link to="/sound">
              <Button name="sound" />
            </Link>
          </li>
          <li>
            <Link to="/todos">
              <Button name="all" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </HeaderStyles>
)

export default Header

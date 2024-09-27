import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 280px;
  background-color: hsl(0, 0%, 50%);

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1440px;
  }

  .Box {
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .LogoBox {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 40px;
        background: none;
        border: none;
        font-size: 38px;
        color: white;
        font-weight: bold;
        cursor: pointer;

        span {
          color: red;
        }
      }

      .search {
        position: relative;
        width: 280px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        input {
          position: relative;
          width: 100%;
          height: 40px;
          padding-left: 20px;
          border: none;
          outline: none;
          border-radius: 20px;

          z-index: 0;
        }

        button {
          position: absolute;
          font-size: 16px;
          color: black;
          right: 25px;
          z-index: 2;
          cursor: pointer;
        }
      }

      @media screen and (max-width: ${breakpoints.md}) {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }

    .NavList {
      display: flex;
      width: 100%;
      height: 40px;
      justify-content: center;
      list-style: none;
      gap: 20px;

      li a {
        height: 40px;
        font-size: 16px;
        color: white;
        background-color: red;
        text-decoration: none;
        padding: 10px 20px 10px 20px;
        border-radius: 10px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="Box">
        <div className="LogoBox">
          <button>
            F<span>oo</span>dy Z<span>o</span>ne
          </button>

          <div className="search">
            <input type="text" placeholder="Enter search " />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>

        <nav>
          <ul className="NavList">
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/about">Breakfast</a>
            </li>
            <li>
              <a href="/services">Lunch</a>
            </li>
            <li>
              <a href="/contact">Dinner</a>
            </li>
          </ul>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

/*Category*/

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
  text-align: center;
  gap: 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }

  @media (max-width: 450px) {
    gap: 0rem;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  @media (max-width: 600px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 450px) {
    width: 4rem;
    height: 4rem;
  }

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    h4 {
      font-size: 0.6rem;
    }
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

/*Cuisine*/

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

/*Search*/
const FormStyle = styled.form`
  margin: 0rem 20rem;

  @media (max-width: 1200px) {
    margin: 0rem 10rem;
  }

  @media (max-width: 750px) {
    margin: 0rem;
  }

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    color: white;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

/*Recipe*/
const DetailWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 870px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 1200px) {
    li {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 1200px) {
    h3 {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }

  ul {
    margin-top: 2rem;
  }
`;

const Portrait = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  position: relative;

  h2 {
    margin-bottom: 2rem;
    position: absolute;
    top: 0;
    left: 2rem;
  }

  @media (max-width: 870px) {
    position: static;

    h2 {
      position: static;
    }
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 7rem;
    left: 0;
    width: 100%;
  }

  @media (max-width: 870px) {
    img {
      position: static;
      border-radius: 3%;
    }
  }
`;

const Info = styled.div`
  margin-left: 7rem;

  @media (max-width: 1200px) {
    margin-left: 3rem;
  }

  @media (max-width: 870px) {
    margin-left: 0rem;

`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 0.7rem;
    margin-right: 1rem;
  }

  @media (max-width: 870px) {
    display: block;
    margin: 1rem auto;
    width: 15rem;
  }
`;

/*Logo*/
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flx-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export {
  Wrapper,
  Card,
  Gradient,
  List,
  SLink,
  Grid,
  CuisineCard,
  FormStyle,
  DetailWrapper,
  Button,
  Info,
  Logo,
  Nav,
  Portrait,
};

import React from "react";
import styled from "styled-components";

const GamePlay = ({ toggleRegister }) => {
  return (
    <Main>
      <div className="banner-text">
        <h1>P</h1>
        <h1>A</h1>
        <h1>R</h1>
        <h1>H</h1>
        <h1>A</h1>
        <h1>I</h1>
        <h1>C</h1>
        <h1>O</h1>
        <h1>R</h1>
        <h1>N</h1>
        <h1>E</h1>
        <h1>R</h1>
      </div>

      <div className="mainDiv">
        <div className="firstDiv">
          <div className="image-container">
            <img src="/images/image-1.png" alt="standard-form" />
            <h1> Standard Form (O levels & IGCSE)</h1>
          </div>
          <div className="image-container">
            <img src="images/PEL.png" alt="PEL" />
            <h1> Power Electronics</h1>
          </div>
        </div>
        <div className="secondDiv">
          <div className="image-container">
            <img src="images/DE.png" alt="DE" />
            <h1> Differential Equations </h1>
          </div>
          <div className="image-container">
            <img src="images/P&S.png" alt="P-N-S" />
            <h1> Probability & Statistics </h1>
          </div>
        </div>
        <div className="thirdDiv">
          <div className="image-container">
            <img src="/images/INDICES.png" alt="INDICES" />
            <h1>INDICES</h1>
          </div>
          <div className="image-container">
            <img src="/images/derivatives1.png" alt="derivatives" />
            <h1> DERIVATIVES </h1>
          </div>
        </div>
        <div>
          <Button onClick={toggleRegister}> Register Courses </Button>
        </div>
      </div>
    </Main>
  );
};

export default GamePlay;

const Main = styled.div`
  .banner-text {
    margin-left: 100px;
    font-size: xx-large;
    color: black;
    font-weight: bolder;
  }

  .mainDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: -1580px;
  }

  .firstDiv,
  .secondDiv,
  .thirdDiv {
    display: flex;
    justify-content: center;
    gap: 20px; /* Space between images */
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container img {
    width: 1000px;
    height: 400px; /* Make all images the same height */
    border: 4px solid;
    object-fit: cover; /* Ensure consistent scaling */
  }

  .image-container h1 {
    padding: 10px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }

  /* Border Colors */
  .image-container:nth-child(1) img {
    border-color: darkblue;
  }
  .image-container:nth-child(2) img {
    border-color: red;
  }
  .image-container:nth-child(3) img {
    border-color: yellow;
  }
  .image-container:nth-child(4) img {
    border-color: yellow;
  }
`;
const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  padding: 10 px 18px;
  gap: 10px;
  min-width: 220px;
  height: 44px;
  font-size: 50px;
  min-block-size: min-content;
  cursor: pointer;
  transition: 0.4 background black;
  &:hover {
    transition: 0.3 background ease-in;
    border: 1 px solid black;
    color: black;
    background-color: white;
  }
`;

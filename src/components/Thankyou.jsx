import React from "react";
import styled from "styled-components";
import "../App.css";

const Thankyou = ({ toggleRegister }) => {
  return (
    <Main className="hero">
      <div className="hero-content">
        <div className="hero-adjust">
          <h1>MUHAMMAD FAIZAN</h1>

          <p> - ELECTRONICS ENGINEER</p>
          <p>
            - An Experienced Teacher ( O levels | IGCSE | Engineering Subjects)
          </p>
          <p> - A Coder (Reactjs | Python)</p>
        </div>

        <div className="hero-btn">
          <a
            href="https://www.youtube.com/@Fayzanhere" // Replace with your channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            <img
              src="/images/youtube.png"
              alt="YouTube Icon"
              className="youtube-icon"
            />
            Official YouTube Channel
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/fizan.jpeg" alt="hero-image" />
      </div>
    </Main>
  );
};

export default Thankyou;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-image img {
    width: 700px;
    height: 700px;
    border-style: solid;
    border-radius: 50%;
    border-color: brown;
    padding: 2px;
    margin-top: 290px;
  }
  .hero-content {
    line-height: 1600%;
  }

  .hero-content h1 {
    font-weight: 800;
    line-height: 102px;
    font-size: 80px;
    line-height: 100px;
    margin-right: 50px;
    margin-top: 250px;
    color: black;
  }

  .hero-adjust p {
    line-height: 100%;
    font-size: 50px;
    color: black;
    max-width: 1000px;
  }
  .hero-btn {
    display: flex;
    gap: 40px;
    gap: 25px;
    justify-content: center;
    padding-right: 90px;
  }

  .youtube-button {
    display: flex;
    align-items: center;
    height: 40px;
    margin-left: -530px;
    gap: 8px;
    font-size: 24px;
    background-color: #5dbea3
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
  }

  .youtube-button:hover {
    background-color: #ffbd03;
  }

  .youtube-icon {
    width: 50px;
    height: 50px;
  }
`;

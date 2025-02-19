import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/pc.jpg" alt="home-image" />
      </div>
      <div className="content">
        <h1> Welcome to Parhai Corner </h1>
        <Button onClick={toggle}> What we offer </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;

  .image img {
    width: 700px;
    height: 700px;
    border-radius: 50%;
  }
  .content {
    line-height: 5px;
    padding: 6px 16px;
  }

  .content h1 {
    font-size: 50px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  background-color: darkblue;
  color: white;
  border-radius: 5px;
  padding: 10 px 18px;
  gap: 10px;
  min-width: 220px;
  height: 44px;
  font-size: 26px;
  cursor: pointer;
  transition: 0.4 background black;
  &:hover {
    transition: 0.3 background ease-in;
    border: 1 px solid black;
    color: black;
    background-color: white;
  }
`;

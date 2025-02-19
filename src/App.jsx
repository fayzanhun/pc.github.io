import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import Thankyou from "./components/Thankyou";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isPage, setIsPage] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  const toggleRegisterPage = () => {
    setIsPage((prev) => !prev);
  };

  return (
    <>
      <div>
        {!isGameStarted && <StartGame toggle={toggleGamePlay} />}
        {isGameStarted && !isPage && (
          <GamePlay toggleRegister={toggleRegisterPage} />
        )}
        {isPage && <Thankyou />}
      </div>
    </>
  );
}

export default App;

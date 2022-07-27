import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ！</button>
      <br />
      <button>on/off</button>
      <p>{num}</p>
      <p>(><)</p>
    </>
  );
};

export default App;

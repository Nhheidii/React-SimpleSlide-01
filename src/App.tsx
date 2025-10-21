import "./styles.css";
import BeFe from "./component/BeFe";
import ReactPrjCreate from "./component/ReactPrjCreate";
import MainUI from "./component/MainUI";
import Quiz from "./component/Quiz";
import { useState } from "react";
import Js from "./component/Js";
import MainExcercises from "./component/MainExcercises";
import ShowCode from "./component/ShowCode";
import Dai5 from "./component/Dai5";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState(null);

  function handleClick(Content) {
    setShowContent((prev) => !prev);
    setContent(<Content />);
  }

  return (
    <>
      <h1>Reactについて</h1>
      <p>
        ※Click button to show the content, then please click that button one
        time again to close
      </p>
      <div className="title">
        <div className="App1">
          <MainUI
            title="5日目(Props)"
            Content={Dai5}
            handleClick={() => handleClick(Dai5)}
            buttonName="Study me"
          />
          <MainUI
            title="２日目（JS問題・回答)"
            Content={MainExcercises}
            handleClick={() => handleClick(MainExcercises)}
            buttonName="Practice me"
          />
          <MainUI
            title="Quiz"
            Content={Quiz}
            handleClick={() => handleClick(Quiz)}
            buttonName="Do me"
          />
          <MainUI
            title="1日目(Reactとは)"
            Content={BeFe}
            handleClick={() => handleClick(BeFe)}
            buttonName="Study me"
          />
          <MainUI
            title="１日目（Projectの作成）"
            Content={ReactPrjCreate}
            handleClick={() => handleClick(ReactPrjCreate)}
            buttonName="Study me"
          />

          <br></br>
        </div>
      </div>
      <div className="display">{showContent && content}</div>
    </>
  );
}

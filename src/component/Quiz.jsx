import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../data.js";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  console.log("quiz component is render");
  const [userAnswers, setUserAnswers] = useState([]);
  const [trueAns, setTrueAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [nullAns, setNullAns] = useState(0);
  const [answeredState, setAnsweredState] = useState("");
  const activeQuestionIndex = userAnswers.length;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [bgColor, setBgColor] = useState("");

  const handleClick = useCallback(function (selectedAns) {
    setSelectedAnswer(selectedAns);
    setBgColor("orange");
    setTimeout(() => {
      if (selectedAns === QUESTIONS[activeQuestionIndex].answers[0]) {
        setBgColor("green");
        setTrueAns((prev) => prev + 1);
      } else if (
        selectedAns === QUESTIONS[activeQuestionIndex].answers[1] ||
        selectedAns === QUESTIONS[activeQuestionIndex].answers[2] ||
        selectedAns === QUESTIONS[activeQuestionIndex].answers[3]
      ) {
        setWrongAns((prev) => prev + 1);
        setBgColor("red");
      }
    }, 1000);
    setTimeout(() => {
      setUserAnswers((prevAns) => [...prevAns, selectedAnswer]);
    }, 2000);
  });

  const handleSkipAnswer = useCallback(() => {
    handleClick(null);
    setNullAns((prev) => prev + 1);
  }, [handleClick]);

  //shuffle function
  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i >= 1; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }

  const quizCompletedOrNot = activeQuestionIndex === QUESTIONS.length;
  {
    console.log(quizCompletedOrNot);
  }

  if (quizCompletedOrNot) {
    return (
      <>
        <div>
          <h2> True ans is </h2>
          {trueAns}
          <h2> Null ans is </h2>
          {nullAns}
          <h2> Wrong ans is </h2>
          {wrongAns}
        </div>
      </>
    );
  }
  const randomAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  return (
    <>
      <div className="quiz">
        <div>
          <QuestionTimer
            key={activeQuestionIndex}
            timeOut={15000}
            onTimeout={handleSkipAnswer}
          />
          <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
          <ul>
            {randomAnswers.map((answer) => {
              const selected = answer === selectedAnswer;
              return (
                <div key="focus" id="focus" className="ans">
                  <li key={answer}>
                    <button
                      // className={selected ? "active" : ""}
                      style={{
                        backgroundColor: selected ? bgColor : "",
                      }}
                      onClick={() => handleClick(answer)}
                    >
                      {answer}
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

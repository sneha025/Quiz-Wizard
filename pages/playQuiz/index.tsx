import questionsArray from "../../data/questionnair";
import { useState } from "react";
const PlayQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [scoreBoard, setScoreBoard] = useState<boolean>(false);

  const changeQuestion = (answerIsCorrecct: boolean) => {
    if (currentQuestion < questionsArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScoreBoard(!scoreBoard);
    }
    if (answerIsCorrecct) {
      calculateResult();
    }
  };

  const calculateResult = () => {
    setResult(result + 5);
  };
  return (
    <div className="flex flex-grow mx-auto my-28 h-80 w-max px-10 bg-purple-800 rounded shadow-lg">
      {!scoreBoard && (
        <div className="grid grid-cols-2 w-full">
          <div className="w-full">
            <div className=" flex flex-col flex-grow text-white gap-8 m-2 font-sans ">
              <div className="text-lg ">
                React Basics {currentQuestion + 1}/{questionsArray.length}
              </div>
              <div className="text-xl py-8">
                {questionsArray[currentQuestion].question}
              </div>
            </div>
          </div>

          <div className="grid grid-rows-">
            {questionsArray[currentQuestion].answers.map((eachAnswer) => {
              const { answer, iscorrect } = eachAnswer;
              return (
                <div className=" my-auto">
                  <button
                    className="bg-white hover:bg-purple-300 text-gray-800 font-semibold m-2 py-2 px-24 rounded-full shadow w-full "
                    onClick={() => changeQuestion(iscorrect)}
                  >
                    {answer}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {scoreBoard && (
        <div className="grid grid-rows text-3xl">
          <div className="flex justify-center my-5">
            <h1 className=" size-l  text-white"> Score Board</h1>
          </div>
          <div className="flex justify-center my-5  text-white"> {result}</div>
          <div>
            <button
              className="
              bg-white
              hover:bg-purple-300
              text-gray-800
              font-semibold
              text-lg
              m-1
              py-1
              px-10
              rounded-full
              shadow
              w-full"
              onClick={() => {
                setScoreBoard(!scoreBoard);
                setCurrentQuestion(0);
                setResult(0);
              }}
            >
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayQuiz;

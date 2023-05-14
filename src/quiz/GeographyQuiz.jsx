import React, { useState } from 'react';
import './style.scss';
const GeographyQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Где находится самая протяженная граница на планете?',
      options: [
        'Между США и Канадой',
        'Между Россией и Китаем',
        'Между Россией и Казахстаном.',
        'Между Индией и Бангладеш',
        'Между Австралией и Индонезией',
      ],
      price: 100,
      answer: 'Между США и Канадой',
      description: 'Длина границы 8891 км',
      selected: '',
    },
    {
      question: 'Сколько на планете Земля материков? ',
      price: 200,
      options: ['5', '6', '7', '8'],
      answer: '6',
      selected: '',
    },
    {
      question: 'Какое государство самое маленькое в мире',
      price: 400,
      options: ['Тувалу', 'Сан-Марино', 'Монако', 'Ватикан', 'Лихтенштейн'],
      answer: 'Ватикан',
      selected: '',
    },
  ]);
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(true);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selected = option;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    if (questions[currentQuestion].selected === '') {
      return;
    }

    if (questions[currentQuestion].selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="wrap">
      {showScore ? (
        <div className="subWrap">
          <div className="firstrow">
            <div className="image-section">
              <img className="img-class" src="1661927962_j-36.jpg" alt="" />
            </div>
            <div className="points-section">
              <div className="left-point-sec">
                <div className="point-sec-elem">
                  <div className="num-vopros">1</div>
                  <div>100</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">2</div>
                  <div>200</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">3</div>
                  <div>400</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">4</div>
                  <div>800</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">5</div>
                  <div>1600</div>
                </div>
              </div>
              <div className="right-point-sec">
                <div className="point-sec-elem">
                  <div className="num-vopros">6</div>
                  <div>100 </div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">7</div>
                  <div>200</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">8</div>
                  <div>400</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">9</div>
                  <div>800</div>
                </div>
                <div className="point-sec-elem">
                  <div className="num-vopros">10</div>
                  <div>1600</div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondrow">
            <div className="question-wrap">
              <div className="leftquestionelem">
                <div className="elemforquestion elemforquestion-top"></div>
                <div className="elemforquestion-bottom"></div>
              </div>
              <div className="midforquestion">
                Где находится самая протяженная граница на планете?
              </div>
              <div className="rightquestionelem">
                <div className="elemforquestion elemforquestion-top"></div>
                <div className="elemforquestion-bottom"></div>
              </div>
            </div>
          </div>
          <div className="thirdrow">
            <div className="rowanswer-1">
              <div className="answerelem-1">
                <div className="answerelem-1-top"></div>
                <div className="answerelem-1-bottom"></div>
              </div>
              <div className="answerelem-2">Ответ А</div>
              <div className="answerelem-3">
                <div className="answerelem-3-top"></div>
                <div className="answerelem-3-bottom"></div>
              </div>
              <div className="answerelem-4">Ответ Б</div>
              <div className="answerelem-5">
                <div className="answerelem-5-top"></div>
                <div className="answerelem-5-bottom"></div>
              </div>
            </div>

            <div className="round">5</div>

            <div className="rowanswer-2">
              <div className="answerelem-1">
                <div className="answerelem-1-top"></div>
                <div className="answerelem-1-bottom"></div>
              </div>
              <div className="answerelem-2">Ответ В</div>
              <div className="answerelem-3">
                <div className="answerelem-3-top"></div>
                <div className="answerelem-3-bottom"></div>
              </div>
              <div className="answerelem-4">Ответ Г</div>
              <div className="answerelem-5">
                <div className="answerelem-5-top"></div>
                <div className="answerelem-5-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="result-page">
          <div>Результат: 5 баллов</div>
          <div>
            <div className="buttonAgain">Заново</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeographyQuiz;

// <div>
// {showScore ? (
//   <div>
//     <h1>
//       You scored {score} out of {questions.length}!
//     </h1>
//     <button
//       onClick={() => {
//         setScore(0);
//         setCurrentQuestion(0);
//         setShowScore(false);
//         setQuestions(
//           questions.map((question) => {
//             return {
//               ...question,
//               selected: '',
//             };
//           }),
//         );
//       }}>
//       Play Again
//     </button>
//   </div>
// ) : (
//   <div>
//     <h1>{questions[currentQuestion].question}</h1>
//     {questions[currentQuestion].options.map((option, index) => (
//       <button key={index} onClick={() => handleOptionClick(option)}></button>
//     ))}
//     <button onClick={handleNextQuestion}>
//       {currentQuestion + 1 === questions.length ? 'Finish' : 'Next Question'}
//     </button>
//   </div>
// )}
// </div>

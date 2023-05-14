import React, { useState } from 'react';
import './style.scss';
const GeographyQuiz = () => {
  // вопросы
  const [questions, setQuestions] = useState([
    {
      index: 0,
      question: 'Где находится самая протяженная граница на планете?',
      options: [
        'Между США и Канадой',
        'Между Россией и Китаем',
        'Между Россией и Казахстаном.',
        'Между Индией и Бангладеш',
      ],
      image: 'noimage.jpg',
      price: 100,
      answer: 'Между США и Канадой',
      description: 'Длина границы 8891 км',
      selected: '',
    },
    {
      index: 1,
      question: 'Сколько на планете Земля материков? ',
      price: 200,
      image: 'noimage.jpg',
      options: ['5', '6', '7', '8'],
      answer: '6',
      selected: '',
    },
    {
      index: 2,
      question: 'Какое государство самое маленькое в мире?',
      price: 400,
      image: 'noimage.jpg',
      options: ['Тувалу', 'Сан-Марино', 'Монако', 'Ватикан'],
      answer: 'Ватикан',
      selected: '',
    },
    {
      index: 3,
      question: 'Какой город является столицей Египта? ',
      image: 'noimage.jpg',
      price: 800,
      options: ['Луанда', 'Мехико', 'Каир', 'Буэнос-Айрес'],
      answer: 'Каир',
      selected: '',
    },
    {
      index: 4,
      question: 'В какой стране проживает наибольшее количество человек в мире? ',
      image: 'noimage.jpg',
      price: 1600,
      options: ['США', 'Индия', 'Китай', 'Пакистан'],
      answer: 'Индия',
      selected: '',
    },
    {
      index: 5,
      question: 'Самый большой остров на земле? ',
      image: 'noimage.jpg',
      price: 3200,
      options: ['Гренландия', 'Суматра', 'Калимантан', 'Кипр'],
      answer: 'Гренландия',
      selected: '',
    },
    {
      index: 6,
      question: 'Какая страна имеет наибольшее количество часовых поясов? ',
      image: 'noimage.jpg',
      price: 6400,
      options: ['Канада', 'Россия', 'Австралия', 'Франция'],
      answer: 'Франция',
      selected: '',
    },
    {
      index: 7,
      question: 'В какой стране располагается больше всего островов? ',
      image: 'noimage.jpg',
      price: 12800,
      options: ['Япония', 'Филиппины', 'Швеция', 'Индонезия'],
      answer: 'Швеция',
      selected: '',
    },
    {
      index: 8,
      question: 'В какой стране находится озеро с наибольшими запасами пресной воды? ',
      image: 'noimage.jpg',
      price: 25600,
      options: ['Россия', 'Канада', 'Бразилия', 'Китай'],
      answer: 'Россия',
      selected: '',
    },
    {
      index: 9,
      question: 'Какая страна имеет наибольшее количество границ? ',
      image: 'noimage.jpg',
      price: 51200,
      options: ['Китай', 'Россия', 'Бразилия', 'Канада'],
      answer: 'Китай',
      selected: '',
    },
    {
      index: 10,
      question: 'Какая страна изображена на данном фото? ',
      image: '11.jpg',
      price: 102400,
      options: ['Франция', 'Россия', 'Польша', 'Германия'],
      answer: 'Германия',
      selected: '',
    },
    {
      index: 11,
      question: 'Силуэт какого государства изображен на данном фото? ',
      image: '12.jpg',
      price: 204800,
      options: ['Казахстан', 'Бразилия', 'Иран', 'США'],
      answer: 'США',
      selected: '',
    },
    {
      index: 12,
      question: 'Флаг какого государства изображен на данном фото? ',
      image: '13.jpg',
      price: 409600,
      options: ['Афганистан', 'Азербайджан', 'Судан', 'Ирак'],
      answer: 'Афганистан',
      selected: '',
    },
    {
      index: 13,
      question: 'Столицей какого государства является город, показанный на данном фото? ',
      image: '14.jpg',
      price: 819200,
      options: ['Италия', 'Аргентина', 'Бразилия', 'Никакого'],
      answer: 'Никакого',
      selected: '',
    },
    {
      index: 14,
      question: 'В каком городе Индии находится данное сооружение?',
      image: '15.jpg',
      price: 1638400,
      options: ['Нью-Дели', 'Мумбаи', 'Бангалор ', 'Агра'],
      answer: 'Агра',
      selected: '',
    },
    {
      index: 15,
      question: 'На какой реке располагается город, показанный на данном фото? ',
      image: '16.jpg',
      price: 3276800,
      options: ['Луара ', 'Сена', 'Рейн ', 'Рона '],
      answer: 'Сена',
      selected: '',
    },
    {
      index: 16,
      question: 'На каком континенте расположена данная достопримечательность? ',
      image: '17.jpg',
      price: 6553600,
      options: ['Европа', 'Северная Америка', 'Южная Америка', 'Австралия '],
      answer: 'Южная Америка',
      selected: '',
    },
    {
      index: 17,
      question: 'Назовите город',
      image: '18.jpg',
      price: 13107200,
      options: ['Токио', 'Сеул', 'Торонто', 'Шанхай'],
      answer: 'Торонто',
      selected: '',
    },
    {
      index: 18,
      question: 'Какие два государства соединяет данный мост? ',
      image: '19.jpg',
      price: 26214400,
      options: [
        'Данию и Швецию',
        'Китай и Россию',
        'Узбекистан и Киргизию',
        'Малайзию и Индонезию',
      ],
      answer: 'Данию и Швецию',
      selected: '',
    },
    {
      index: 19,
      question: 'В какой стране располагается данная достопримечательность? ',
      price: 52428800,
      image: '20.jpg',
      options: ['Россия', 'Украина', 'Польша', 'Хорватия'],
      answer: 'Украина',
      selected: '',
    },
  ]);

  // текущий вопрос
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // флаг, показать ли результат
  const [showScore, setShowScore] = useState(false);

  return (
    // основная обертка
    <div className="wrap">
      {!showScore ? (
        <div className="subWrap">
          {/* раздел, где есть фотография и табло с очками */}
          <div className="firstrow">
            {/* фотография */}
            <div className="image-section">
              <img className="img-class" src={questions[currentQuestion].image} alt="" />
            </div>
            {/* табло с очками */}
            <div className="points-section">
              <div className="left-point-sec">
                {currentQuestion < 10
                  ? questions.slice(0, 5).map((elem) => {
                      return (
                        <div className="point-sec-elem">
                          <div className="num-vopros">{elem.index + 1}</div>
                          <div style={currentQuestion == elem.index ? { fontWeight: 900 } : {}}>
                            {elem.price}
                          </div>
                        </div>
                      );
                    })
                  : questions.slice(10, 15).map((elem) => {
                      return (
                        <div className="point-sec-elem">
                          <div className="num-vopros">{elem.index + 1}</div>
                          <div style={currentQuestion == elem.index ? { fontWeight: 900 } : {}}>
                            {elem.price}
                          </div>
                        </div>
                      );
                    })}
              </div>
              <div className="right-point-sec">
                {currentQuestion < 10
                  ? questions.slice(5, 10).map((elem) => {
                      return (
                        <div className="point-sec-elem">
                          <div className="num-vopros">{elem.index + 1}</div>
                          <div style={currentQuestion == elem.index ? { fontWeight: 900 } : {}}>
                            {elem.price}
                          </div>
                        </div>
                      );
                    })
                  : questions.slice(15, 20).map((elem) => {
                      return (
                        <div className="point-sec-elem">
                          <div className="num-vopros">{elem.index + 1}</div>
                          <div style={currentQuestion == elem.index ? { fontWeight: 900 } : {}}>
                            {elem.price}
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
          {/* раздел с вопросом */}
          <div className="secondrow">
            <div className="question-wrap">
              <div className="leftquestionelem">
                <div className="elemforquestion elemforquestion-top"></div>
                <div className="elemforquestion-bottom"></div>
              </div>
              <div className=" midforquestion">{questions[currentQuestion].question}</div>
              <div className="rightquestionelem">
                <div className="elemforquestion elemforquestion-top"></div>
                <div className="elemforquestion-bottom"></div>
              </div>
            </div>
          </div>
          {/* раздел с вариантами ответов */}
          <div className="thirdrow">
            {/* верхние ответы */}
            <div className="rowanswer-1">
              <div className="answerelem-1">
                <div className="answerelem-1-top"></div>
                <div className="answerelem-1-bottom"></div>
              </div>
              <div
                onClick={() => {
                  if (questions[currentQuestion].answer == questions[currentQuestion].options[0]) {
                    if (currentQuestion != 19) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setShowScore(true);
                    }
                  } else {
                    setShowScore(true);
                  }
                }}
                className=" answerelem-2 buttonAnswer">
                {questions[currentQuestion].options[0]}
              </div>
              <div className="answerelem-3">
                <div className="answerelem-3-top"></div>
                <div className="answerelem-3-bottom"></div>
              </div>
              <div
                onClick={() => {
                  if (questions[currentQuestion].answer == questions[currentQuestion].options[1]) {
                    if (currentQuestion != 19) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setShowScore(true);
                    }
                  } else {
                    setShowScore(true);
                  }
                }}
                className="buttonAnswer">
                {questions[currentQuestion].options[1]}
              </div>
              <div className="answerelem-5">
                <div className="answerelem-5-top"></div>
                <div className="answerelem-5-bottom"></div>
              </div>
            </div>
            {/* текущий раунд */}
            <div className="round">{currentQuestion + 1}</div>
            {/* нижние ответы */}
            <div className="rowanswer-2">
              <div className="answerelem-1">
                <div className="answerelem-1-top"></div>
                <div className="answerelem-1-bottom"></div>
              </div>
              <div
                onClick={() => {
                  if (questions[currentQuestion].answer == questions[currentQuestion].options[2]) {
                    if (currentQuestion != 19) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setShowScore(true);
                    }
                  } else {
                    setShowScore(true);
                  }
                }}
                className="buttonAnswer">
                {questions[currentQuestion].options[2]}
              </div>
              <div className="answerelem-3">
                <div className="answerelem-3-top"></div>
                <div className="answerelem-3-bottom"></div>
              </div>
              <div
                onClick={() => {
                  if (questions[currentQuestion].answer == questions[currentQuestion].options[3]) {
                    if (currentQuestion != 19) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setShowScore(true);
                    }
                  } else {
                    setShowScore(true);
                  }
                }}
                className="buttonAnswer">
                {questions[currentQuestion].options[3]}
              </div>
              <div className="answerelem-5">
                <div className="answerelem-5-top"></div>
                <div className="answerelem-5-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // страница с результатом
        <div className="result-page">
          <div>{`Результат: ${
            currentQuestion == 0 ? 0 : questions[currentQuestion - 1].price
          } баллов`}</div>
          <div>
            <div
              onClick={() => {
                setCurrentQuestion(0);
                setShowScore(false);
              }}
              className="buttonAgain">
              Заново
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeographyQuiz;

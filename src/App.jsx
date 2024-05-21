import { useState } from 'react';
import './App.css'
import questions from './constants/questions.json'
import Question from './components/question';
import Result from './components/result';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) =>{
    setCurrentQuestion(currentQuestion+1);
    setUserAnswers([...userAnswers , isCorrect]);

  };

  const resetQuiz = ()=>{
    setCurrentQuestion(0);
    setUserAnswers([]);
  }


  return (
    <>
     <h1 className='App'>World Quiz</h1>

     {/* Question Component */}
     {currentQuestion < questions.length && (

       
       <Question question= {questions[currentQuestion]} onAnswerClick ={handleNextQuestion} />
      )
     }
     {/* ResutlComponent */}
    {


    currentQuestion === questions.length && <Result
      userAnswers ={userAnswers}
      questions ={questions} 
      resetQuiz = {resetQuiz}
      />
    } 
    </>
  )
}

export default App

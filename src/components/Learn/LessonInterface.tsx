import React, { useState, useEffect } from 'react';
import { useLesson } from '../../contexts/LessonContext';

const questions = [
  { id: 1, hindi: 'यह एक केला है।', english: 'This is a banana.' },
  { id: 2, hindi: 'मैं पानी पीता हूं।', english: 'I drink water.' },
  { id: 3, hindi: 'आप कैसे हैं?', english: 'How are you?' },
  { id: 4, hindi: 'मुझे हिंदी पसंद है।', english: 'I like Hindi.' },
  { id: 5, hindi: 'वह किताब पढ़ रही है।', english: 'She is reading a book.' },
  { id: 6, hindi: 'क्या आप चाय पीएंगे?', english: 'Would you like to drink tea?' },
  { id: 7, hindi: 'मेरा नाम राहुल है।', english: 'My name is Rahul.' },
  { id: 8, hindi: 'आज मौसम अच्छा है।', english: 'The weather is good today.' },
  { id: 9, hindi: 'मुझे भारतीय खाना पसंद है।', english: 'I like Indian food.' },
  { id: 10, hindi: 'वह स्कूल जा रहा है।', english: 'He is going to school.' }
];

const normalizeString = (str: string): string => {
  return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();
};

const LessonInterface: React.FC = () => {
  const { currentQuestionIndex, hearts, setHearts, nextQuestion } = useLesson();
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setUserAnswer('');
    setFeedback(null);
    setShowAnswer(false);
    setDisableInput(false);
  }, [currentQuestionIndex]);

  const handleCheck = () => {
    const normalizedUserAnswer = normalizeString(userAnswer);
    const normalizedCorrectAnswer = normalizeString(currentQuestion.english);

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setFeedback('correct');
      setDisableInput(true);
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    } else {
      setFeedback('incorrect');
      setHearts(hearts - 1);
      setShowAnswer(true);
      setDisableInput(true);
      setTimeout(() => {
        setShowAnswer(false);
        setDisableInput(false);
        setUserAnswer('');
        setFeedback(null);
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disableInput) {
      handleCheck();
    }
  };

  if (currentQuestionIndex >= questions.length || hearts <= 0) {
    return (
      <div className="bg-[#1f1f1f] text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          {hearts <= 0 ? "Lesson Failed!" : "Lesson Completed!"}
        </h2>
        <p>
          {hearts <= 0
            ? "You've run out of hearts. Try again!"
            : `You've completed all ${questions.length} questions!`}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#58cc02] text-white font-bold py-2 px-4 rounded"
        >
          Restart Lesson
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1f1f] text-white p-6 rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="w-3/4 bg-gray-700 h-2 rounded">
          <div 
            className="bg-[#58cc02] h-full rounded" 
            style={{width: `${(currentQuestionIndex / questions.length) * 100}%`}}
          ></div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < hearts ? "text-red-500" : "text-gray-500"}>❤️</span>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Write this in English</h2>
      <div className="flex items-center mb-4">
        <img 
          src="https://i.pinimg.com/564x/c7/37/90/c7379088a66d3ab172ec64a80128b171.jpg" 
          alt="Character" 
          className="w-16 h-16 mr-4"
        />
        <div className="bg-gray-700 p-2 rounded">
          <span>{currentQuestion.hindi}</span>
        </div>
      </div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`w-full p-2 rounded mb-4 ${
          feedback === 'correct' ? 'bg-green-500' : 
          feedback === 'incorrect' ? 'bg-red-500' : 'bg-gray-700'
        }`}
        placeholder="Type your answer here"
        disabled={disableInput}
      />
      {showAnswer && (
        <div className="text-yellow-500 mb-2">
          Correct answer: {currentQuestion.english}
        </div>
      )}
      <button
        onClick={handleCheck}
        className="bg-[#58cc02] text-white font-bold py-2 px-4 rounded"
        disabled={disableInput}
      >
        Check
      </button>
    </div>
  );
};

export default LessonInterface;
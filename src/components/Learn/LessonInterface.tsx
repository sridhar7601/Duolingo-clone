import React, { useState, useEffect } from 'react';
import { useLesson } from '../../contexts/LessonContext';
import { X } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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


const LessonInterface: React.FC = () => {
  const { currentQuestionIndex, hearts, setHearts, nextQuestion, exitLesson } = useLesson();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const words = currentQuestion.english.split(' ');
    setAvailableWords(words.sort(() => Math.random() - 0.5));
    setSelectedWords([]);
  }, [currentQuestionIndex]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId === 'selected' ? selectedWords : availableWords;
    const destList = result.destination.droppableId === 'selected' ? selectedWords : availableWords;

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destList.splice(result.destination.index, 0, movedItem);

    setSelectedWords([...selectedWords]);
    setAvailableWords([...availableWords]);
  };

  const handleWordClick = (word: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedWords(selectedWords.filter(w => w !== word));
      setAvailableWords([...availableWords, word]);
    } else {
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(availableWords.filter(w => w !== word));
    }
  };

  const handleCheck = () => {
    const userAnswer = selectedWords.join(' ');
    if (userAnswer === currentQuestion.english) {
      nextQuestion();
    } else {
      setHearts(hearts - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0e1821] text-white flex flex-col">
      <div className="flex justify-between items-center p-4">
        <button onClick={exitLesson} className="text-white">
          <X size={24} />
        </button>
        <div className="w-1/2 bg-gray-700 h-2 rounded">
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
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-8">Write this in English</h2>
        <div className="flex items-center mb-8">
          <img 
            src="/api/placeholder/80/80" 
            alt="Character" 
            className="w-20 h-20 mr-4"
          />
          <div className="bg-[#1f3041] p-3 rounded-lg text-lg flex items-center">
            <span>{currentQuestion.hindi}</span>
            <button className="ml-2">🔊</button>
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="selected" direction="horizontal">
            {(provided) => (
              <div 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                className="w-full max-w-2xl border-b border-gray-600 mb-4 min-h-[50px] flex flex-wrap"
              >
                {selectedWords.map((word, index) => (
                  <Draggable key={word} draggableId={word} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-[#3c5571] m-1 p-2 rounded cursor-pointer"
                        onClick={() => handleWordClick(word, true)}
                      >
                        {word}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="available" direction="horizontal">
            {(provided) => (
              <div 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                className="flex flex-wrap justify-center items-start min-h-[100px] w-full max-w-2xl"
              >
                {availableWords.map((word, index) => (
                  <Draggable key={word} draggableId={word} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-[#3c5571] m-1 p-2 rounded cursor-pointer"
                        onClick={() => handleWordClick(word, false)}
                      >
                        {word}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="p-4 flex justify-center">
        <button
          onClick={handleCheck}
          className="w-40 bg-[#58cc02] text-white font-bold py-3 px-6 rounded-xl text-xl"
        >
          CHECK
        </button>
      </div>
    </div>
  );
};

export default LessonInterface;
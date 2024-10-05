import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LessonContextType {
  isLessonStarted: boolean;
  startLesson: () => void;
  currentQuestionIndex: number;
  hearts: number;
  setHearts: (hearts: number) => void;
  nextQuestion: () => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLessonStarted, setIsLessonStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hearts, setHearts] = useState(5);

  const startLesson = () => setIsLessonStarted(true);
  const nextQuestion = () => setCurrentQuestionIndex(prev => prev + 1);

  return (
    <LessonContext.Provider value={{
      isLessonStarted,
      startLesson,
      currentQuestionIndex,
      hearts,
      setHearts,
      nextQuestion,
    }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = () => {
  const context = useContext(LessonContext);
  if (context === undefined) {
    throw new Error('useLesson must be used within a LessonProvider');
  }
  return context;
};